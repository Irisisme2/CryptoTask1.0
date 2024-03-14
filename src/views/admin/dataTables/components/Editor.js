import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  Input,
  Textarea,
  Select,
  Text,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { useState } from 'react';

// Form1 - Dane podstawowe zadania
const Form1 = ({ handleChange, taskData }) => {
  return (
    <>
      <Heading textAlign={'center'} fontWeight="normal" mb="2%">
        Task Details - Basic Information
      </Heading>
      <FormControl>
        <Input
          name="title"
          placeholder="Enter task title"
          value={taskData.title}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl mt="2%">
        <Textarea
          name="description"
          placeholder="Enter task description"
          value={taskData.description}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl mt="2%">
        <Select
          name="sensitiveData"
          placeholder="Are there sensitive data in this task?"
          value={taskData.sensitiveData}
          onChange={handleChange}
        >
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </Select>
      </FormControl>
    </>
  );
};

// Form2 - Dane związane z lokalizacją zadania
const Form2 = ({ handleChange, taskData }) => {
  return (
    <>
      <Heading textAlign={'center'} fontWeight="normal" mb="2%">
        Task Details - Location
      </Heading>
      <FormControl>
        <Input
          name="country"
          placeholder="Country"
          value={taskData.country}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl mt="2%">
        <Input
          name="city"
          placeholder="City"
          value={taskData.city}
          onChange={handleChange}
        />
      </FormControl>
    </>
  );
};

// Form3 - Dodatkowe informacje o zadaniu
const Form3 = ({ handleChange, taskData }) => {
  return (
    <>
      <Heading textAlign={'center'} fontWeight="normal" mb="2%">
        Task Details - Additional Information
      </Heading>
      <FormControl>
        <Input
          name="dueDate"
          type="date"
          value={taskData.dueDate}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl mt="2%">
        <Select
          name="priority"
          placeholder="Select priority"
          value={taskData.priority}
          onChange={handleChange}
        >
          {/* Opcje dla listy rozwijanej z priorytetami */}
        </Select>
      </FormControl>

      {taskData.sensitiveData && (
        <FormControl mt="2%">
          <Textarea
            name="sensitiveDetails"
            placeholder="Enter sensitive details"
            value={taskData.sensitiveDetails}
            onChange={handleChange}
          />
        </FormControl>
      )}
    </>
  );
};

// Form4 - Wrażliwe dane
const Form4 = ({ taskData }) => {
  return (
    <>
      <Heading textAlign={'center'} fontWeight="normal" mb="2%">
        Sensitive Data Details
      </Heading>
      <Box>
        <Text fontWeight="bold">Task Title:</Text>
        <Text>{taskData.title}</Text>
        <Text fontWeight="bold" mt="2">
          Task Description:
        </Text>
        <Text>{taskData.description}</Text>
        <Text fontWeight="bold" mt="2">
          Sensitive Data:
        </Text>
        <Text>{taskData.sensitiveData ? 'Yes' : 'No'}</Text>
        <Text fontWeight="bold" mt="2">
          Country:
        </Text>
        <Text>{taskData.country}</Text>
        <Text fontWeight="bold" mt="2">
          City:
        </Text>
        <Text>{taskData.city}</Text>
        <Text fontWeight="bold" mt="2">
          Due Date:
        </Text>
        <Text>{taskData.dueDate}</Text>
        <Text fontWeight="bold" mt="2">
          Priority:
        </Text>
        <Text>{taskData.priority}</Text>
        {taskData.sensitiveData && (
          <>
            <Text fontWeight="bold" mt="2">
              Sensitive Details:
            </Text>
            <Text>{taskData.sensitiveDetails}</Text>
          </>
        )}
      </Box>
    </>
  );
};

const Multistep = () => {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    sensitiveData: false,
    country: '',
    city: '',
    dueDate: '',
    priority: '',
    sensitiveDetails: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setTaskData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 3) {
      toast({
        title: 'Task created.',
        description: 'Task has been created successfully.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } else {
      setStep(step + 1);
      setProgress(progress + 33.33);
    }
  };

  return (
    <Box p="4" bg="gray.100" minH="100vh" w="4xl" mx="auto">
      <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated />
      {step === 1 ? (
        <Form1 handleChange={handleChange} taskData={taskData} />
      ) : step === 2 ? (
        <Form2 handleChange={handleChange} taskData={taskData} />
      ) : step === 3 ? (
        <Form3 handleChange={handleChange} taskData={taskData} />
      ) : (
        <Form4 taskData={taskData} />
      )}
      <ButtonGroup mt="5%" w="100%">
        <Flex w="100%" justifyContent="space-between">
          <Flex>
            <Button
              onClick={() => {
                setStep(step - 1);
                setProgress(progress - 33.33);
              }}
              isDisabled={step === 1}
              colorScheme="teal"
              variant="solid"
              w="7rem"
              mr="5%"
            >
              Back
            </Button>
            <Button
              w="7rem"
              isDisabled={step === 4}
              onClick={handleSubmit}
              colorScheme="teal"
              variant="outline"
            >
              {step === 3 ? 'Submit' : 'Next'}
            </Button>
          </Flex>
          {step === 3 ? null : (
            <Button
              w="7rem"
              colorScheme="red"
              variant="solid"
              onClick={() => {
                toast({
                  title: 'Task canceled.',
                  description: 'Task creation has been canceled.',
                  status: 'info',
                  duration: 3000,
                  isClosable: true,
                });
              }}
            >
              Cancel
            </Button>
          )}
        </Flex>
      </ButtonGroup>
    </Box>
  );
};

export default Multistep;
