console.log('background script')

chrome.runtime.onMessageExternal.addListener((message, sender, sendResponse) => {
  console.log('🚀 ~ onMessageExternal.addListener ~ message', message)
  console.log('🚀 ~ onMessageExternal.addListener ~ sender', sender)

  sendResponse({type: 'background response'})
  return true
})

chrome.runtime.onConnectExternal.addListener((port) => {
  console.log('🚀 ~ onConnectExternal.addListener ~ port', port)
  port.onMessage.addListener((message, port) => {
    console.log('🚀 ~ port.onMessage.addListener ~ message', message)
    console.log('🚀 ~ port.onMessage.addListener ~ port', port)
  })
  port.postMessage({type: 'background port'})
})
