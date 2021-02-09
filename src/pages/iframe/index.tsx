console.log('iframe script')
console.log('🚀 ~ chrome.runtime', chrome.runtime)

const crxId = 'maloephdpppmlljdnpnmeepmhdfbcapo'
console.log('🚀 ~ crxId', crxId)
chrome.runtime.sendMessage(
  crxId,
  {
    type: 'runtime',
  },
  (response) => {
    if (chrome.runtime.lastError)
      console.error(chrome.runtime.lastError.message)
    console.log('🚀 ~ response', response)
  },
)

const port = chrome.runtime.connect(crxId, { name: 'iframe' })
console.log('🚀 ~ port', port)
port.onMessage.addListener((message, port) => {
  console.log('🚀 ~ port.onMessage.addListener ~ message', message)
  console.log('🚀 ~ port.onMessage.addListener ~ port', port)
})
port.postMessage({ type: 'page port' })
