(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("d4ca5ebf-2945-48da-8738-3e16e27ef132");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd4ca5ebf-2945-48da-8738-3e16e27ef132' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.1.0.min.js": "YobFyzPeVUsFQydHkJGsJL1kyfHnWxOlPc3EwaV22TmBaeGoXHLWx5aRRVPS9xlE", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.0.min.js": "NuAg9+TcTQQqvQCTtkCneRrpkTiMhhfiq0KHiBzx8ECiKiLWXHN6i6ia3q7b3eHu", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.0.min.js": "uMVqQc8JqHitD67bXTn9a06Mrk3EiHRaZ18EJENQenAKJ/KL71SakdXYomZQpGRr", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.0.min.js": "u+eGuEXC8aw0VSCm2mH+b/tQEAitUOYiR1H6SuIVEdUmXsf4vN8m/SmXpmjb7U/X"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{&quot;c10a4115-9e90-4951-bca5-20ec75eeb2a2&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61990&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61957&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;/aa38gSV0z+lEbjCRNbTP018uJKEF9Q/9ea4YsRY1D+dUbkyBJrUP0W8uQJE29Q/7Sa60oMc1T+Vkbqiw13VPz38unIDn9U/5Wa7QkPg1T+N0bsSgyHWPzU8vOLCYtY/3aa8sgKk1j+FEb2CQuXWPy18vVKCJtc/1ea9IsJn1z99Ub7yAanXPyW8vsJB6tc/zSa/koEr2D91kb9iwWzYPx38vzIBrtg/xWbAAkHv2D9t0cDSgDDZPxU8waLAcdk/vabBcgCz2T9lEcJCQPTZPwx8whKANdo/tObC4r922j9cUcOy/7faPwS8w4I/+do/rCbEUn862z+sJsRSfzrbP6wmxFJ/Ots/BLzDgj/52j9cUcOy/7faP7TmwuK/dto/DHzCEoA12j9lEcJCQPTZP72mwXIAs9k/FTzBosBx2T9t0cDSgDDZP8VmwAJB79g/Hfy/MgGu2D91kb9iwWzYP80mv5KBK9g/Jby+wkHq1z99Ub7yAanXP9XmvSLCZ9c/LXy9UoIm1z+FEb2CQuXWP92mvLICpNY/NTy84sJi1j+N0bsSgyHWP+Vmu0JD4NU/Pfy6cgOf1T+Vkbqiw13VP+0mutKDHNU/Rby5AkTb1D+dUbkyBJrUP/XmuGLEWNQ/TXy4koQX1D+lEbjCRNbTP/2mt/IEldM//aa38gSV0z8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[64]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+Va/AMXj8Pz5Vr8AxePw/pnkMS+Gg/D+gk3z47sP8P5MgQma35vw/tS6eAP4G/T9akZtV5iT9P/4o2aG4Qv0/9T0EyGpf/T9oGgvOzX/9PwcIMLVYpP0/Mn05mtHM/T9pqnQsmP/9P20YJdjkNf4/3wIgWT14/j8I9OLG28T+Pz8uNBDzGP8/sT4GKzp3/z9NJ7I+aeL/P5APNXqoKgBAHW0008pmAEBggkbxkKQAQIE1Xkwc4wBAa2S2TSIiAUC4V2RqTV8BQCgxBTkymQFAMrEiFWzPAUDmGaXIgwACQD9Q8qalKwJAO1PL5DhRAkBPJAjrdnACQPECFxyqhgJAAAAAAAAAAAA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[64]}},&quot;selected&quot;:{&quot;id&quot;:&quot;62014&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;62013&quot;}},&quot;id&quot;:&quot;61993&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61988&quot;}},&quot;id&quot;:&quot;61992&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61969&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61988&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61989&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61990&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61992&quot;}},&quot;id&quot;:&quot;61991&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61964&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;62006&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;61957&quot;}},&quot;id&quot;:&quot;61956&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61970&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61995&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61967&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61994&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;61973&quot;}},&quot;id&quot;:&quot;61968&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61948&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;VJHEIr972z/8+8Ty/rzbP6RmxcI+/ts/TNHFkn4/3D/0O8ZivoDcP5ymxjL+wdw/RBHHAj4D3T/se8fSfUTdP5Tmx6K9hd0/PFHIcv3G3T/ku8hCPQjeP4wmyRJ9Sd4/NJHJ4ryK3j/c+8my/MveP4RmyoI8Dd8/LNHKUnxO3z/UO8sivI/fP3ymy/L70N8/kghm4R0J4D/mPWbJvSngPzpzZrFdSuA/jqhmmf1q4D/i3WaBnYvgPzYTZ2k9rOA/ikhnUd3M4D/efWc5fe3gPzKzZyEdDuE/huhnCb0u4T/aHWjxXE/hPy5TaNn8b+E/gohowZyQ4T/WvWipPLHhPyrzaJHc0eE/fihpeXzy4T/SXWlhHBPiPyaTaUm8M+I/eshpMVxU4j/O/WkZ/HTiPyIzagGcleI/dmhq6Tu24j/KnWrR29biPx7Tarl79+I/cghroRsY4z/GPWuJuzjjPxpza3FbWeM/bqhrWft54z/C3WtBm5rjPxYTbCk7u+M/akhsEdvb4z++fWz5evzjPxKzbOEaHeQ/Zuhsybo95D+6HW2xWl7kPw5TbZn6fuQ/YohtgZqf5D+2vW1pOsDkPwrzbVHa4OQ/XihuOXoB5T+yXW4hGiLlPwaTbgm6QuU/Wshu8Vlj5T+u/W7Z+YPlPwIzb8GZpOU/VmhvqTnF5T+qnW+R2eXlP/7Sb3l5BuY/UghwYRkn5j+mPXBJuUfmP/pycDFZaOY/TqhwGfmI5j+i3XABmanmP/YScek4yuY/Skhx0djq5j+efXG5eAvnP/KycaEYLOc/RuhxibhM5z+aHXJxWG3nP+5Scln4jec/QohyQZiu5z+WvXIpOM/nP+rychHY7+c/Pihz+XcQ6D+SXXPhFzHoP+aSc8m3Ueg/OshzsVdy6D+O/XOZ95LoP+IydIGXs+g/Nmh0aTfU6D+KnXRR1/ToP97SdDl3Fek/Mgh1IRc26T+FPXUJt1bpP9lydfFWd+k/Lah12faX6T+B3XXBlrjpP9USdqk22ek/KUh2kdb56T99fXZ5dhrqP9KydmEWO+o/0rJ2YRY76j/SsnZhFjvqP319dnl2Guo/KUh2kdb56T/VEnapNtnpP4HddcGWuOk/Lah12faX6T/ZcnXxVnfpP4U9dQm3Vuk/Mgh1IRc26T/e0nQ5dxXpP4qddFHX9Og/Nmh0aTfU6D/iMnSBl7PoP479c5n3kug/OshzsVdy6D/mknPJt1HoP5Jdc+EXMeg/Pihz+XcQ6D/q8nIR2O/nP5a9cik4z+c/QohyQZiu5z/uUnJZ+I3nP5odcnFYbec/RuhxibhM5z/ysnGhGCznP559cbl4C+c/Skhx0djq5j/2EnHpOMrmP6LdcAGZqeY/TqhwGfmI5j/6cnAxWWjmP6Y9cEm5R+Y/UghwYRkn5j/+0m95eQbmP6qdb5HZ5eU/VmhvqTnF5T8CM2/BmaTlP679btn5g+U/Wshu8Vlj5T8Gk24JukLlP7JdbiEaIuU/XihuOXoB5T8K821R2uDkP7a9bWk6wOQ/YohtgZqf5D8OU22Z+n7kP7odbbFaXuQ/Zuhsybo95D8Ss2zhGh3kP759bPl6/OM/akhsEdvb4z8WE2wpO7vjP8Lda0GbmuM/bqhrWft54z8ac2txW1njP8Y9a4m7OOM/cghroRsY4z8e02q5e/fiP8qdatHb1uI/dmhq6Tu24j8iM2oBnJXiP879aRn8dOI/eshpMVxU4j8mk2lJvDPiP9JdaWEcE+I/fihpeXzy4T8q82iR3NHhP9a9aKk8seE/gohowZyQ4T8uU2jZ/G/hP9odaPFcT+E/huhnCb0u4T8ys2chHQ7hP959Zzl97eA/ikhnUd3M4D82E2dpPazgP+LdZoGdi+A/jqhmmf1q4D86c2axXUrgP+Y9Zsm9KeA/kghm4R0J4D98psvy+9DfP9Q7yyK8j98/LNHKUnxO3z+EZsqCPA3fP9z7ybL8y94/NJHJ4ryK3j+MJskSfUneP+S7yEI9CN4/PFHIcv3G3T+U5seivYXdP+x7x9J9RN0/RBHHAj4D3T+cpsYy/sHcP/Q7xmK+gNw/TNHFkn4/3D+kZsXCPv7bP/z7xPL+vNs/VJHEIr972z9UkcQiv3vbPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]}},&quot;selected&quot;:{&quot;id&quot;:&quot;62016&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;62015&quot;}},&quot;id&quot;:&quot;61998&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;62000&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61950&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;61973&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61993&quot;}},&quot;id&quot;:&quot;61997&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61983&quot;}},&quot;id&quot;:&quot;61987&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61961&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61993&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61994&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61995&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61997&quot;}},&quot;id&quot;:&quot;61996&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;61974&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;61964&quot;},{&quot;id&quot;:&quot;61965&quot;},{&quot;id&quot;:&quot;61966&quot;},{&quot;id&quot;:&quot;61967&quot;},{&quot;id&quot;:&quot;61968&quot;},{&quot;id&quot;:&quot;61969&quot;},{&quot;id&quot;:&quot;61970&quot;},{&quot;id&quot;:&quot;61971&quot;}]},&quot;id&quot;:&quot;62021&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61965&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;61960&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;61963&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61999&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62006&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;62021&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;62022&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;61972&quot;}},&quot;id&quot;:&quot;61966&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62010&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62011&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62012&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;61971&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61998&quot;}},&quot;id&quot;:&quot;62002&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62009&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61998&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61999&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;62000&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;62002&quot;}},&quot;id&quot;:&quot;62001&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;61956&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;61959&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;62008&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;61961&quot;}},&quot;id&quot;:&quot;61960&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61983&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61984&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61985&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61987&quot;}},&quot;id&quot;:&quot;61986&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;62003&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;61956&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;61959&quot;},{&quot;id&quot;:&quot;61963&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;61960&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;61986&quot;},{&quot;id&quot;:&quot;61991&quot;},{&quot;id&quot;:&quot;61996&quot;},{&quot;id&quot;:&quot;62001&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;62003&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;61974&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;61948&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;61952&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;61950&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;61954&quot;}},&quot;id&quot;:&quot;61947&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62013&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62008&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62014&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61952&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;61947&quot;},0,0]]},&quot;id&quot;:&quot;62020&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;61964&quot;},{&quot;id&quot;:&quot;61965&quot;},{&quot;id&quot;:&quot;61966&quot;},{&quot;id&quot;:&quot;61967&quot;},{&quot;id&quot;:&quot;61968&quot;},{&quot;id&quot;:&quot;61969&quot;},{&quot;id&quot;:&quot;61970&quot;},{&quot;id&quot;:&quot;61971&quot;}]},&quot;id&quot;:&quot;61974&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61954&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61984&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;62022&quot;},{&quot;id&quot;:&quot;62020&quot;}]},&quot;id&quot;:&quot;62023&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;4tCnKSHZmz9ie64pHu2fP/GS2pSNAKI/MOjdFIwKpD9wPeGUihSmP7CS5BSJHqg/8OfnlIcoqj8wPesUhjKsP3CS7pSEPK4/2PN4ikEjsD94nnrKQCixPxhJfApALbI/uPN9Sj8ysz9Ynn+KPje0P/hIgco9PLU/mPOCCj1Btj84noRKPEa3P9hIhoo7S7g/ePOHyjpQuT8YnokKOlW6P7hIi0o5Wrs/WPOMijhfvD/4nY7KN2S9P5hIkAo3ab4/NvORSjZuvz/rzknFmjnAPzukSmUavMA/i3lLBZo+wT/bTkylGcHBPyskTUWZQ8I/e/lN5RjGwj/Lzk6FmEjDPxukTyUYy8M/a3lQxZdNxD+7TlFlF9DEPwskUgWXUsU/W/lSpRbVxT+rzlNFllfGP/ujVOUV2sY/S3lVhZVcxz+bTlYlFd/HP+sjV8WUYcg/6yNXxZRhyD/rI1fFlGHIP5tOViUV38c/S3lVhZVcxz/7o1TlFdrGP6vOU0WWV8Y/W/lSpRbVxT8LJFIFl1LFP7tOUWUX0MQ/a3lQxZdNxD8bpE8lGMvDP8vOToWYSMM/e/lN5RjGwj8rJE1FmUPCP9tOTKUZwcE/i3lLBZo+wT87pEplGrzAP+vOScWaOcA/NvORSjZuvz+YSJAKN2m+P/idjso3ZL0/WPOMijhfvD+4SItKOVq7PxieiQo6Vbo/ePOHyjpQuT/YSIaKO0u4PziehEo8Rrc/mPOCCj1Btj/4SIHKPTy1P1ief4o+N7Q/uPN9Sj8ysz8YSXwKQC2yP3ieespAKLE/2PN4ikEjsD9wku6UhDyuPzA96xSGMqw/8OfnlIcoqj+wkuQUiR6oP3A94ZSKFKY/MOjdFIwKpD/xktqUjQCiP2J7rike7Z8/4tCnKSHZmz/i0KcpIdmbPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[86]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASgtbR8SnAEBKC1tHxKcAQHjczBClcgBAEeXatL89AEAmTnpBeAYAQKY+3Nhnmf8/n1aSeV8p/z+nW1VSTrn+PyKQuPq2Sf4/ZWYjn4ba/T/FtRJnY279P81xw5yQBP0//INCeqSd/D9ZNJhCxjb8P6fb29hg0Ps/TfJzP/xr+z8TrAElSQX7P3igdrqxnvo/gV/pZ5Yy+j/+HsB0q8L5P+L+/Ji5Tvk/NEYe5IjY+D9we8KOVln4Pz/VpXu80/c/oJSoP95I9z9kFoJjx7X2P+UEG7kKHPY/tkcuxc9+9T/qoEWyGd30P4wDTWpJN/Q/3uPoUuiP8z/WlLTZpejyP1zEbL9oSPI/gmhZAYyr8T8JM3qpxhTxPxu+ukKZhfA/POnH85IF8D/pzZ2UdSnvPynls5pGZe4/Rd3j1vHJ7T9BsqWEdV3tP6H+MvzSFO0/s+kNxn/97D8AAAAAAAAAAA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[86]}},&quot;selected&quot;:{&quot;id&quot;:&quot;62010&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;62009&quot;}},&quot;id&quot;:&quot;61983&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61985&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62016&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62015&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;61972&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61989&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;O/lXZRTkyD+LzlgFlGbJP9ujWaUT6ck/K3laRZNryj97TlvlEu7KP8sjXIWScMs/GvlcJRLzyz9qzl3FkXXMP7qjXmUR+Mw/CnlfBZF6zT9aTmClEP3NP6ojYUWQf84/+vhh5Q8Czz9KzmKFj4TPP83RsZKHA9A/dTyyYsdE0D8dp7IyB4bQP8URswJHx9A/bXyz0oYI0T8V57OixknRP71RtHIGi9E/Zby0QkbM0T8NJ7UShg3SP7WRteLFTtI/Xfy1sgWQ0j8FZ7aCRdHSP63RtlKFEtM/VTy3IsVT0z9VPLcixVPTP1U8tyLFU9M/rdG2UoUS0z8FZ7aCRdHSP138tbIFkNI/tZG14sVO0j8NJ7UShg3SP2W8tEJGzNE/vVG0cgaL0T8V57OixknRP218s9KGCNE/xRGzAkfH0D8dp7IyB4bQP3U8smLHRNA/zdGxkocD0D9KzmKFj4TPP/r4YeUPAs8/qiNhRZB/zj9aTmClEP3NPwp5XwWRes0/uqNeZRH4zD9qzl3FkXXMPxr5XCUS88s/yyNchZJwyz97TlvlEu7KPyt5WkWTa8o/26NZpRPpyT+LzlgFlGbJPzv5V2UU5Mg/O/lXZRTkyD8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[58]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADhPe8DkZcCQOE97wORlwJALIYqQtGgAkB0UtrHa6QCQGj01gwdowJAmi4K7ByeAkCcpn1EnJQCQKWENYRjiAJAOT8X19Z6AkCcBNBvJ24CQB7JsghPYAJAv1DlWBNTAkDusASHsEUCQEaLFEpmOgJAh9R040kwAkCniDIH5yUCQJg+eu77GgJATN11AikQAkCMVEUSbwQCQG5YPkEw9QFAQyT1WwHlAUB+SbsltNEBQKXA76fHuQFAwLgMcWSeAUD5rpf3+X4BQJQuqddgWwFAcsS87oY0AUDCBZofxwgBQIZ8PRK32QBAAAAAAAAAAAA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[58]}},&quot;selected&quot;:{&quot;id&quot;:&quot;62012&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;62011&quot;}},&quot;id&quot;:&quot;61988&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;}],&quot;root_ids&quot;:[&quot;62023&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.0&quot;}}';
                  var render_items = [{"docid":"c10a4115-9e90-4951-bca5-20ec75eeb2a2","root_ids":["62023"],"roots":{"62023":"d4ca5ebf-2945-48da-8738-3e16e27ef132"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();