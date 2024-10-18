console.log('background is running')

chrome.runtime.onMessage.addListener((request) => {
  console.log('background has received a message from popup:', request)
  if (request.type === 'COUNT') {
    console.log('background has received a message from popup, and count is ', request?.count)
  }
});

chrome.declarativeNetRequest.updateDynamicRules({
  addRules: [
    {
      id: 1,
      priority: 1,
      action: {
        type: 'modifyHeaders',
        responseHeaders: [
          { header: 'X-Frame-Options', operation: 'remove' },
          { header: 'Content-Security-Policy', operation: 'remove' },
        ],
      },
      condition: {
        urlFilter: '*',
        resourceTypes: ['sub_frame'],
      },
    },
  ] as any,
  removeRuleIds: [1],
})

