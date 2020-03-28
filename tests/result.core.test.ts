import { Ok, Err, isOk, isErr } from "../src/result";

test("Ok(…) isOk", () => {
  expect(isOk(Ok(1))).toBe(true);
});

test("Ok(…) isErr", () => {
  expect(isErr(Ok(1))).toBe(false);
});

test("Err(…) isOk", () => {
  expect(isOk(Err("aah!!"))).toBe(false);
});

test("Err(…) isErr", () => {
  expect(isErr(Err("aah!!"))).toBe(true);
});
