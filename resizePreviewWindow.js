window.onmessage = function(e){
    if (e.data && e.data.action === 'resizePreviewWindow') {
      if(e.data.size === 'mobile') {
        var sidebar_width = 320
        window.resizeTo(400, 753);
        window.moveTo(sidebar_width, 0);
        console.log('mobile'  )
      } else if(e.data.size === 'desktop') {
        var sidebar_width = 320
        var win_width = screen.width - sidebar_width
        var win_height = screen.height
        window.resizeTo(win_width, win_height);
        window.moveTo(sidebar_width, 0);
        console.log('desktop'  )
      } else if(e.data.size === 'fullscreen') {
        var sidebar_width = 40
        var win_width = screen.width - sidebar_width
        var win_height = screen.height
        window.resizeTo(win_width, win_height);
        window.moveTo(sidebar_width, 0);
        console.log('fullscreen'  )
      }
    }
};
