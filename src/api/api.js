export const getTasks = async () =>  {
  return [
    {
      'id': 1,
      'title': 'Get Coding Challenge Done',
      'dueDate': new Date(2021, 5, 28),
      'done': false
    },
    {
      'id': 2,
      'title': 'Plan vacation days',
      'done': false
    },
    {
      'id': 3,
      'title': 'Code Refactoring',
      'done': true
    },
    {
      'id': 4,
      'title': 'Get a new laptop',
      'dueDate': new Date(2020, 6, 20),
      'done': false
    },
  ];
};
