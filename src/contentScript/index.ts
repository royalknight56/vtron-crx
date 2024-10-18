// 监听来自网页的消息
window.addEventListener('message', function(event) {
    // 只接收来自当前页面的消息
    if (event.source !== window) {
        return;
    }
    // 处理接收到的消息
    if (event.data && event.data.type === 'FROM_PAGE' && event.data.msg === 'HELLO') {
        // 向后台脚本发送消息
        window.postMessage({ type: 'FROM_VTRON_CRX',msg:'HELLO', payload: 'Hello from VtronCrx' }, '*');
    }
});