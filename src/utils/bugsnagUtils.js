import bugsnag from '@bugsnag/js'
import bugsnagReact from '@bugsnag/plugin-react'
import React from 'react';

const bugsnagClient = process.env.BUGSNAG_KEY ? bugsnag(process.env.BUGSNAG_KEY) : null;
if (bugsnagClient) {
  bugsnagClient.use(bugsnagReact, React)
}
const ErrorBoundary = bugsnagClient ? bugsnagClient.getPlugin('react') : React.Fragment;

export {
  bugsnagClient,
  ErrorBoundary,
};