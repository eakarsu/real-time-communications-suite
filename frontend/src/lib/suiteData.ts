export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'AIContactCenterAgent', ownership: 'Conversations source capabilities and workflows', coverage: ['Conversations', 'Channels', 'Agents'] },
  { name: 'AIVoiceAssistant', ownership: 'Channels source capabilities and workflows', coverage: ['Queues', 'Routing', 'Transcripts'] },
  { name: 'AIConversationAnalytics', ownership: 'Agents source capabilities and workflows', coverage: ['Sentiment', 'Escalations', 'SLAs'] },
  { name: 'AIOmnichannelRouter', ownership: 'Queues source capabilities and workflows', coverage: ['Integrations', 'Quality', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Conversations', value: '84', note: 'Active' },
  { label: 'Channels', value: '61', note: 'Open' },
  { label: 'Agents', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Conversations operating view', 'Channels operating view', 'Agents operating view', 'Queues operating view', 'Routing operating view', 'Transcripts operating view', 'Sentiment operating view', 'Escalations operating view'];
export const workflowHighlights = ['Conversations workflow with records, approvals, audit, and reporting', 'Channels workflow with records, approvals, audit, and reporting', 'Agents workflow with records, approvals, audit, and reporting', 'Queues workflow with records, approvals, audit, and reporting', 'Routing workflow with records, approvals, audit, and reporting'];
