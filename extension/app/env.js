(function (window) {
  window.__env = window.__env || {};

  // API url
  window.__env.apiUrl = 'http://162.243.154.104';
  window.__env.port = '3000';
  window.__env.destUrl = window.__env.apiUrl + ':' + window.__env.port;

  // Base url
  window.__env.baseUrl = '/';

  // Whether or not to enable debug mode
  // Setting this to false will disable console output
  window.__env.enableDebug = true;
}(this));