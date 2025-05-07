  // unit.test.js

  import {
    isPhoneNumber,
    isEmail,
    isStrongPassword,
    isDate,
    isHexColor,
  } from '../code-to-unit-test/unit-test-me';

  // TODO - Part 2

  import * as functions from '../code-to-unit-test/unit-test-me';

  test('isPhoneNumber: valid (123) 456-7890', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
  });
  test('isPhoneNumber: valid 123-456-7890', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
  });
  test('isPhoneNumber: invalid missing delimiters', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
  });
  test('isPhoneNumber: invalid letters', () => {
    expect(functions.isPhoneNumber('abc-def-ghij')).toBe(false);
  });


  test('isEmail: valid simple', () => {
    expect(functions.isEmail('test@example.com')).toBe(true);
  });
  test('isEmail: valid with subdomain', () => {
    expect(functions.isEmail('user_name@mail.co')).toBe(true);
  });
  test('isEmail: invalid missing TLD', () => {
    expect(functions.isEmail('user@mail')).toBe(false);
  });
  test('isEmail: invalid trailing dot', () => {
    expect(functions.isEmail('user@mail.')).toBe(false);
  });


  test('isStrongPassword: valid letters+digits', () => {
    expect(functions.isStrongPassword('Abc12345')).toBe(true);
  });
  test('isStrongPassword: valid with underscore', () => {
    expect(functions.isStrongPassword('a_b1C')).toBe(true);
  });
  test('isStrongPassword: invalid starts with digit', () => {
    expect(functions.isStrongPassword('1abcDEF')).toBe(false);
  });
  test('isStrongPassword: invalid too short', () => {
    expect(functions.isStrongPassword('ab')).toBe(false);
  });


  test('isDate: valid date with double digit', () => {
    expect(functions.isDate('12/25/2020')).toBe(true);
  });
  test('isDate: valid date with single digit', () => {
    expect(functions.isDate('1/1/2020')).toBe(true);
  });
  test('isDate: invalid month/day out of range', () => {
    expect(functions.isDate('11-30-2020')).toBe(false);
  });
  test('isDate: invalid wrong year format', () => {
    expect(functions.isDate('2020/12/25')).toBe(false);
  });


  test('isHexColor: valid, short form #FFF', () => {
    expect(functions.isHexColor('#FFF')).toBe(true);
  });
  test('isHexColor: valid, long form #123ABC', () => {
    expect(functions.isHexColor('#123ABC')).toBe(true);
  });
  test('isHexColor: invalid, non-hex chars', () => {
    expect(functions.isHexColor('#GGG')).toBe(false);
  });
  test('isHexColor: invalid, incorrect length', () => {
    expect(functions.isHexColor('#ABCD')).toBe(false);
  });