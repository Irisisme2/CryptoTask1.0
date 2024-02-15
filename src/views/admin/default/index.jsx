/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import RecentTasksTable from "views/admin/default/components/Recent Tasks Table";
import Taskstatus from "views/admin/default/components/Taskstatus";
import Taskstatusovertime from "views/admin/default/components/Taskstatusovertime";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

export default function UserReports() {
  // Symulacja danych użytkownika
  const userData = {
    totalTasks: 150, // Liczba ogólna zadań
    completedTasks: 100, // Liczba zadań zakończonych
    earnings: "$2000", // Kwota zarobiona
    tasksCompletedPercentage: Math.round((100 * 100) / 150), // Procent zadań zakończonych
    tasksCompletedThisMonth: 50, // Liczba wykonanych zadań w danym okresie czasu
  };

  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap="20px"
        mb="20px"
      >
        <MiniStatistics
          startContent={
            <Icon
              w="32px"
              h="32px"
              as={MdAttachMoney}
              color={brandColor}
            />
          }
  
          name="Earnings"
          value={userData.earnings}
        />
        <MiniStatistics
          startContent={
            <Icon
            w="32px"
            h="32px"
            as={MdBarChart}
            color={brandColor}
          />
          }
          name="Tasks Completed Percentage"
          value={`${userData.tasksCompletedPercentage}%`}
        />
        <MiniStatistics growth={"+23%"} name="Completed Tasks" value={`${userData.completedTasks}`} />
        <MiniStatistics
          startContent={
            <Icon
            w="32px"
            h="32px"
            as={MdFileCopy}
            color={brandColor}
          />
          }
          name="New Tasks"
          value={userData.totalTasks - userData.completedTasks}
        />
        <MiniStatistics
          startContent={
            <Icon
              w="32px"
              h="32px"
              as={MdFileCopy}
              color={brandColor}
            />
          }
          name="Total Tasks"
          value={userData.totalTasks}
        />
        <MiniStatistics
          startContent={
            <Icon
              w="32px"
              h="32px"
              as={MdBarChart}
              color={brandColor}
            />
          }
          name="Tasks Completed This Month"
          value={userData.tasksCompletedThisMonth}
        />
      </SimpleGrid>


      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <TotalSpent />
        <WeeklyRevenue />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <RecentTasksTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <Taskstatusovertime />
          <PieCard />
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <Taskstatus
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <Tasks />
          <MiniCalendar h='100%' minW='100%' selectRange={false} />
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
}
