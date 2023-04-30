const COMPANY_DEPT = [
  "Marketing",
  "Sales",
  "Engineering",
  "Human Resources",
  "Legal",
];

const COMPANY_DEPT_OBJECTS = COMPANY_DEPT.map((department) => ({
  label: department,
  value: department,
}));

export default COMPANY_DEPT_OBJECTS;
