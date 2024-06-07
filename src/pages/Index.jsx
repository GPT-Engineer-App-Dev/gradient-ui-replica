import { Box, Button, Container, Flex, HStack, IconButton, Input, Select, Table, Tbody, Td, Th, Thead, Tr, VStack, Text, Avatar, Badge } from "@chakra-ui/react";
import { FaBell, FaFilter, FaPlus, FaQuestionCircle, FaSort, FaTrashAlt, FaEdit } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" flexDirection="row" overflow="hidden">
        {/* Sidebar */}
        <Box w="20%" bgGradient="linear(to-b, #FF7E5F, #FEB47B)" p={4} color="white">
          <VStack align="start" spacing={4}>
            <Box>
              <Text fontSize="2xl" fontWeight="bold">Project Name</Text>
              <Text fontSize="md">Category</Text>
            </Box>
            <VStack align="start" spacing={2}>
              <Text>Call Tool</Text>
              <Text>Invoice Tool</Text>
            </VStack>
          </VStack>
        </Box>

        {/* Main Content */}
        <Box w="80%" p={4}>
          {/* Header */}
          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Text fontSize="2xl" fontWeight="bold">Data Table</Text>
            <HStack spacing={4}>
              <Button leftIcon={<FaPlus />} colorScheme="teal">Add report</Button>
              <IconButton icon={<FaQuestionCircle />} aria-label="Help" />
              <IconButton icon={<FaBell />} aria-label="Notifications" />
              <Avatar name="User Profile" />
            </HStack>
          </Flex>

          {/* Search and Filters */}
          <Flex mb={4} justifyContent="space-between">
            <HStack spacing={4}>
              <Input placeholder="Search" />
              <Select placeholder="Category">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </Select>
              <Button leftIcon={<FaFilter />} colorScheme="gray">Filter</Button>
              <Button leftIcon={<FaSort />} colorScheme="gray">Sort</Button>
            </HStack>
            <HStack spacing={4}>
              <Button colorScheme="gray">Import</Button>
              <Button colorScheme="gray">Export</Button>
            </HStack>
          </Flex>

          {/* Data Table */}
          <Box overflowX="auto">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th><Input type="checkbox" /></Th>
                  <Th>Item</Th>
                  <Th>Value ($)</Th>
                  <Th>Data</Th>
                  <Th>Date</Th>
                  <Th>Status</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Array(10).fill("").map((_, index) => (
                  <Tr key={index}>
                    <Td><Input type="checkbox" /></Td>
                    <Td>Lorem dolore</Td>
                    <Td>9,000</Td>
                    <Td>Data series</Td>
                    <Td>DD/MM/YY</Td>
                    <Td><Badge colorScheme="green">Status</Badge></Td>
                    <Td>
                      <HStack spacing={2}>
                        <IconButton icon={<FaEdit />} aria-label="Edit" size="sm" />
                        <IconButton icon={<FaTrashAlt />} aria-label="Delete" size="sm" />
                      </HStack>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>

          {/* Pagination */}
          <Flex justifyContent="space-between" alignItems="center" mt={4}>
            <Text>106 results</Text>
            <HStack spacing={2}>
              <Button size="sm">1</Button>
              <Button size="sm">2</Button>
              <Button size="sm">3</Button>
              <Button size="sm">4</Button>
              <Button size="sm">...</Button>
              <Button size="sm">10</Button>
              <Button size="sm">11</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;