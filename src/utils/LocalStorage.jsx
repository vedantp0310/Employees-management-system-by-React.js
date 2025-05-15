const employees = [
  {
    "id": 1,
    "firstName": "Arjun",
    "email": "john.doe@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "new": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskId": 101,
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Complete project report",
        "taskDescription": "Finish the quarterly project report for management review",
        "taskDate": "2023-06-15",
        "category": "Documentation"
      },
      {
        "taskId": 102,
        "active": false,
        "new": true,
        "completed": true,
        "failed": false,
        "taskTitle": "Client meeting preparation",
        "taskDescription": "Prepare slides and materials for upcoming client meeting",
        "taskDate": "2023-06-10",
        "category": "Meeting"
      },
      {
        "taskId": 103,
        "active": true,
        "new": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Bug fixes",
        "taskDescription": "Address critical bugs in the production environment",
        "taskDate": "2023-06-20",
        "category": "Development"
      },
      {
        "taskId": 104,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Team training",
        "taskDescription": "Conduct training session for new team members",
        "taskDate": "2023-06-25",
        "category": "Training"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "jane.smith@example.com",
    "password": "123",
    "taskCount": {
      "active": 3,
      "new": 1,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "taskId": 201,
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Budget review",
        "taskDescription": "Review and approve department budget for next quarter",
        "taskDate": "2023-06-18",
        "category": "Finance"
      },
      {
        "taskId": 202,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Hire new developer",
        "taskDescription": "Complete interview process for new developer position",
        "taskDate": "2023-06-05",
        "category": "HR"
      },
      {
        "taskId": 203,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "taskTitle": "System upgrade",
        "taskDescription": "Coordinate with IT for the server upgrade process",
        "taskDate": "2023-06-30",
        "category": "Operations"
      },
      {
        "taskId": 204,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Performance reviews",
        "taskDescription": "Complete annual performance reviews for team members",
        "taskDate": "2023-06-12",
        "category": "Management"
      },
      {
        "taskId": 205,
        "active": true,
        "new": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Vendor negotiation",
        "taskDescription": "Renegotiate contract terms with key vendor",
        "taskDate": "2023-06-22",
        "category": "Procurement"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Rahul",
    "email": "mike.brown@example.com",
    "password": "123",
    "taskCount": {
      "active": 4,
      "new": 2,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "taskId": 301,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Design new logo",
        "taskDescription": "Create concepts for company's new branding",
        "taskDate": "2023-06-28",
        "category": "Design"
      },
      {
        "taskId": 302,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Website update",
        "taskDescription": "Implement new content on company website",
        "taskDate": "2023-06-08",
        "category": "Development"
      },
      {
        "taskId": 303,
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Social media campaign",
        "taskDescription": "Plan and execute new social media marketing campaign",
        "taskDate": "2023-06-19",
        "category": "Marketing"
      },
      {
        "taskId": 304,
        "active": true,
        "new": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Client presentation",
        "taskDescription": "Prepare interactive presentation for potential client",
        "taskDate": "2023-06-14",
        "category": "Sales"
      },
      {
        "taskId": 305,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Team building event",
        "taskDescription": "Organize quarterly team building activity",
        "taskDate": "2023-06-02",
        "category": "HR"
      },
      {
        "taskId": 306,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Market research",
        "taskDescription": "Conduct research on competitor products",
        "taskDate": "2023-06-27",
        "category": "Research"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Ananya",
    "email": "emily.jones@example.com",
    "password": "123",
    "taskCount": {
      "active": 5,
      "new": 2,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "taskId": 401,
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Data analysis",
        "taskDescription": "Analyze customer data for insights",
        "taskDate": "2023-06-16",
        "category": "Analytics"
      },
      {
        "taskId": 402,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Database migration",
        "taskDescription": "Migrate customer data to new database system",
        "taskDate": "2023-06-07",
        "category": "IT"
      },
      {
        "taskId": 403,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "taskTitle": "API integration",
        "taskDescription": "Integrate new payment API with existing system",
        "taskDate": "2023-06-29",
        "category": "Development"
      },
      {
        "taskId": 404,
        "active": true,
        "new": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Security audit",
        "taskDescription": "Conduct security audit of all systems",
        "taskDate": "2023-06-21",
        "category": "Security"
      },
      {
        "taskId": 405,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Server maintenance",
        "taskDescription": "Perform routine server maintenance and updates",
        "taskDate": "2023-06-04",
        "category": "Operations"
      },
      {
        "taskId": 406,
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Code review",
        "taskDescription": "Review pull requests from junior developers",
        "taskDate": "2023-06-17",
        "category": "Quality Assurance"
      },
      {
        "taskId": 407,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Document architecture",
        "taskDescription": "Document current system architecture",
        "taskDate": "2023-06-26",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Vikram",
    "email": "david.taylor@example.com",
    "password": "123",
    "taskCount": {
      "active": 6,
      "new": 2,
      "completed": 3,
      "failed": 1
    },
    "tasks": [
      {
        "taskId": 501,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Product launch",
        "taskDescription": "Coordinate cross-functional teams for new product launch",
        "taskDate": "2023-06-30",
        "category": "Management"
      },
      {
        "taskId": 502,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Investor meeting",
        "taskDescription": "Prepare materials for quarterly investor meeting",
        "taskDate": "2023-06-09",
        "category": "Finance"
      },
      {
        "taskId": 503,
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Strategic planning",
        "taskDescription": "Develop strategic plan for next fiscal year",
        "taskDate": "2023-06-23",
        "category": "Planning"
      },
      {
        "taskId": 504,
        "active": true,
        "new": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Partnership negotiation",
        "taskDescription": "Negotiate terms with potential business partner",
        "taskDate": "2023-06-13",
        "category": "Business Development"
      },
      {
        "taskId": 505,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Conference preparation",
        "taskDescription": "Prepare for annual industry conference",
        "taskDate": "2023-06-03",
        "category": "Marketing"
      },
      {
        "taskId": 506,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Employee engagement survey",
        "taskDescription": "Design and implement employee engagement survey",
        "taskDate": "2023-06-24",
        "category": "HR"
      },
      {
        "taskId": 507,
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Process improvement",
        "taskDescription": "Identify and implement process improvements",
        "taskDate": "2023-06-17",
        "category": "Operations"
      },
      {
        "taskId": 508,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Customer feedback analysis",
        "taskDescription": "Analyze recent customer feedback for trends",
        "taskDate": "2023-06-28",
        "category": "Customer Service"
      },
      {
        "taskId": 509,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Regulatory compliance",
        "taskDescription": "Ensure all departments meet regulatory requirements",
        "taskDate": "2023-06-06",
        "category": "Legal"
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "firstName": "Aditya",
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
      localStorage.setItem('employees', JSON.stringify(employees));
      localStorage.setItem('admin', JSON.stringify(admin));
};

// utils/LocalStorage.js
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  const admin = JSON.parse(localStorage.getItem('admin')) || [];
  return { employees, admin };
};
