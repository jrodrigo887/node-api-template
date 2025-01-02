/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';
import path from 'path';
const root = path.resolve(__dirname);
const config: Config = {
  displayName: 'end2end-test',
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  // coverageDirectory: "coverage",

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  // moduleNameMapper: {
  //   '@src/(.*)$': '<rootDir>/src/$1',
  //   '@test/(.*)$': '<rootDir>/test/$1'
  // },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  // The root directory that Jest should scan for tests and modules within
  rootDir: root,

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',

  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],

  // The test environment that will be used for testing
  testEnvironment: 'node',
  testMatch: ['<rootDir>/**/*.test.ts'],
};

export default config;
