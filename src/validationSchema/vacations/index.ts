import * as yup from 'yup';

export const vacationValidationSchema = yup.object().shape({
  vacation_days: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
