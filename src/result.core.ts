const okType = "denis.ws:Result:Ok";
const errType = "denis.ws:Result:Err";

export type Ok<T> = {
  _type: typeof okType;
  val: T;
};

export type Err = {
  _type: typeof errType;
  message: string;
};

export type Result<T> = Ok<T> | Err;

export const Ok = <T>(val: T): Ok<T> => ({ _type: okType, val });
export const Err = (message: string): Err => ({ _type: errType, message });

export const isOk = <T>(r: Result<T>): r is Ok<T> => r._type === okType;
export const isErr = <T>(r: Result<T>): r is Err => r._type === errType;

export const getOkValue = <T>(ok: Ok<T>): T => ok.val;
export const getErrMessage = (err: Err): string => err.message;
