/*
 * @file: constants.js
 * @description: It contain constants.
 * @author: Rajneshwar Singh
 */

export const message = {
  somethingWrong: 'Something went wrong.',
  validationError: 'Validation error. Please check your request and try again.',

  fetch: (labal: string) => {
    return `${labal} fetched successfully.`;
  },
  errorLog: (functionName: string, controllerName: string, err: unknown) => {
    return `${functionName} ${controllerName} Error @ ${err}`;
  },
};

export const statusCode = {
  success: 200,
  badRequest: 400,
  serverError: 501,
  forbidden: 203,
  notFound: 204,
  notAllowed: 205,
  tokenExpired: 401,
  emailOrUserExist: 207,
  wrongPassword: 208,
  accountDeactivated: 209,
  authTokenRequired: 499,
  unauthorized: 403,
};
