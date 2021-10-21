const reporter = require('cucumber-html-reporter');
const options = {
    // bootstrap,hierarchy,foundation,simple
    theme: 'hierarchy',
    jsonFile: 'cucumber_report_api.json',
    output: 'reports/AutomationReport_API.html',
    reportSuiteAsScenarios: true,
    launchReport: true
};
reporter.generate(options);
