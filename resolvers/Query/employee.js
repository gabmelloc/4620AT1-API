import employess from '../../scripts/employees';

export default async (parent, {id}, {db}) => {
  const {
    rows: [employee],
  } = await db.query(employees.selectById, [id]);
  return employee;
};
