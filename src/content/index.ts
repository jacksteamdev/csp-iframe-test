console.log('content script')

const iframe = document.createElement('iframe')
iframe.src = 'http://localhost:5000/pages/iframe/'
document.body.append(iframe)
