const logs = [];

const addLog = (type, message) => {
  const log = {
    id: logs.length + 1,
    type,
    message,
    timestamp: new Date().toISOString()
  };
  logs.push(log);
  return log;
};

const getLogs = () => logs;

module.exports = { addLog, getLogs };