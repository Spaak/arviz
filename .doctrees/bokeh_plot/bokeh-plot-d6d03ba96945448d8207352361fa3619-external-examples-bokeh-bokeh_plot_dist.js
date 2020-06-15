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
    
      
      
    
      var element = document.getElementById("7f2e4b3e-0596-4f21-9af3-43ecd911f83c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7f2e4b3e-0596-4f21-9af3-43ecd911f83c' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;7923a5b1-edda-49ac-b719-137f8c74c698&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59443&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59479&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59421&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59452&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59479&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59421&quot;}},&quot;id&quot;:&quot;59420&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59502&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59452&quot;}},&quot;id&quot;:&quot;59451&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59485&quot;}},&quot;id&quot;:&quot;59489&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59487&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59416&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;59419&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59429&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59481&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59469&quot;}},&quot;id&quot;:&quot;59473&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;left&quot;:[0,1,2,3,4,5,6,7,8,9,10,11],&quot;right&quot;:[1,2,3,4,5,6,7,8,9,10,11,12],&quot;top&quot;:{&quot;__ndarray__&quot;:&quot;uB6F61G4jj/0/dR46SaxP6jGSzeJQcA/Vg4tsp3vxz+JQWDl0CLLP39qvHSTGMQ/cT0K16NwvT956SYxCKysP3sUrkfheqQ/ukkMAiuHhj97FK5H4XqEP/p+arx0k2g/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[12]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59481&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59480&quot;}},&quot;id&quot;:&quot;59469&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;59424&quot;},{&quot;id&quot;:&quot;59425&quot;},{&quot;id&quot;:&quot;59426&quot;},{&quot;id&quot;:&quot;59427&quot;},{&quot;id&quot;:&quot;59428&quot;},{&quot;id&quot;:&quot;59429&quot;}]},&quot;id&quot;:&quot;59431&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59410&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59506&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59447&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;59450&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59486&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59460&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59456&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59507&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59506&quot;}},&quot;id&quot;:&quot;59485&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59425&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59507&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;59493&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59412&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;59484&quot;}]},&quot;id&quot;:&quot;59483&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;59455&quot;},{&quot;id&quot;:&quot;59456&quot;},{&quot;id&quot;:&quot;59457&quot;},{&quot;id&quot;:&quot;59458&quot;},{&quot;id&quot;:&quot;59459&quot;},{&quot;id&quot;:&quot;59460&quot;}]},&quot;id&quot;:&quot;59462&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59477&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59417&quot;}},&quot;id&quot;:&quot;59416&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;59470&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;59407&quot;},{&quot;id&quot;:&quot;59438&quot;}]},&quot;id&quot;:&quot;59490&quot;,&quot;type&quot;:&quot;Row&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59417&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59424&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;59474&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59500&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;59416&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;59419&quot;},{&quot;id&quot;:&quot;59423&quot;},{&quot;id&quot;:&quot;59483&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;59420&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;59472&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;59474&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;59431&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;59408&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;59412&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;59410&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;59414&quot;}},&quot;id&quot;:&quot;59407&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59485&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59486&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59487&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59489&quot;}},&quot;id&quot;:&quot;59488&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59448&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;59461&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59455&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;59471&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;Poisson&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;59472&quot;}]},&quot;id&quot;:&quot;59484&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;59430&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59480&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59441&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59408&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59445&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59469&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59470&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59471&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59473&quot;}},&quot;id&quot;:&quot;59472&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59459&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59420&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;59423&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59427&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59502&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59439&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;59461&quot;}},&quot;id&quot;:&quot;59457&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59451&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;59454&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;59430&quot;}},&quot;id&quot;:&quot;59426&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59428&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;59447&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;59450&quot;},{&quot;id&quot;:&quot;59454&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;59451&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;59488&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;59493&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;59462&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;59439&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;59443&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;59441&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;59445&quot;}},&quot;id&quot;:&quot;59438&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59458&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59414&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59500&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59448&quot;}},&quot;id&quot;:&quot;59447&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59477&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;}],&quot;root_ids&quot;:[&quot;59490&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.0&quot;}}';
                  var render_items = [{"docid":"7923a5b1-edda-49ac-b719-137f8c74c698","root_ids":["59490"],"roots":{"59490":"7f2e4b3e-0596-4f21-9af3-43ecd911f83c"}}];
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