/**
 * Miscellaneous shared classes go here.
 */

import HttpStatusCodes from '../constants/HttpStatusCodes';


/**
 * Error with status code and message
 */
class ErrorResponse extends Error {

  public status: HttpStatusCodes;

  public constructor(status: HttpStatusCodes, message: string) {
    super(message);
    this.status = status;
  }
}

export default ErrorResponse

