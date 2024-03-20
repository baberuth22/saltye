window.onmessage = function(e){
    if (e.data && e.data.action === 'resizePreviewWindow') {
      if(e.data.size === 'mobile') {
        window.resizeTo(400, 753);
      } else if(e.data.size === 'desktop') {
        var sidebar_width = 320
        var win_width = screen.width - sidebar_width
        var win_height = screen.height
        window.resizeTo(win_width, win_height);
      }
    }
};