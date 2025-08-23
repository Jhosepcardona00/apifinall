// Mock para src/config/db.js
const defaultConnection = {
  beginTransaction: jest.fn(() => Promise.resolve()),
  commit: jest.fn(() => Promise.resolve()),
  rollback: jest.fn(() => Promise.resolve()),
  query: jest.fn(() => Promise.resolve([[], []])),
  release: jest.fn(() => Promise.resolve()),
};

const pool = {
  query: jest.fn(() => Promise.resolve([[], []])),
  execute: jest.fn(() => Promise.resolve([[], []])),
  getConnection: jest.fn(() => Promise.resolve(defaultConnection)),
};

module.exports = pool;
