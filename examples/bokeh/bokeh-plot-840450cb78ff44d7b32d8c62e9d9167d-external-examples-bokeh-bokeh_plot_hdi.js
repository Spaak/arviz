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
    
      
      
    
      var element = document.getElementById("52a58099-0738-413e-b1c1-6a033247dc56");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '52a58099-0738-413e-b1c1-6a033247dc56' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;f9bd146c-9757-4ef8-b869-ff58dde4fd6c&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60928&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60926&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60911&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;60932&quot;}},&quot;id&quot;:&quot;60927&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60913&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60907&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;red&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60944&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60920&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;60923&quot;},{&quot;id&quot;:&quot;60924&quot;},{&quot;id&quot;:&quot;60925&quot;},{&quot;id&quot;:&quot;60926&quot;},{&quot;id&quot;:&quot;60927&quot;},{&quot;id&quot;:&quot;60928&quot;},{&quot;id&quot;:&quot;60929&quot;},{&quot;id&quot;:&quot;60930&quot;}]},&quot;id&quot;:&quot;60933&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60955&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60929&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60923&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60958&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60959&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;60930&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60924&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60961&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;60919&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;60922&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;60931&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;60942&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;60943&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;60944&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;60946&quot;}},&quot;id&quot;:&quot;60945&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;HvZEULzCBMDIBTYKf0f8v3DzhoHofPu/82qS8F5V+7+vUt1fy5b6vxC9Z84gxPi/Zxgb2lsr+L840c+NUZn0vxkLmWu5OfS/3Vy3Basl879jl0svvzDyv5wmwPTae/G/iD3QvnX08L9AIeQBy8jwv/cAEwicse+/CsNl2TYO67/R1m4G9qXnvx4m8pcqjua/P97wB3Vg5r8MamYjOBflvzKVlXFy6eS/1FFObBx+478OXYG5u3Dhv6RQ362vCOG/GMEby9rK4L/b3Dll6jzgv23iAYgpO96/sHgzovkk3r9DS6dW4vbcv39XF86yPty/580OOG+e2r/BvAtbk7XZv5Bum/EYa9m/1WqcuNE02b+kXcxoTYjYv/PO3OjSgdi/DkiOGU1P17+Gbn+Jt9LVv3lrkqBqPdW/Wed2IxPc1L+oW+uk5sTPvywV+5URsM+/VbYxm73uzb++asLKt03Lvz89xC0Qfcq/j4hGN7ogx78mPcXnlqDAv5w0JIYAO7u/Dp8AVxYLtL/AlBc0Mn+zv0NGo4dEirG/pQKYvhyulj8am/LMqFSbP0XDQqhjMbI/9+nEdJYItD+wJaQ+0da0PyvD732lLrc/fnlIbsYFuT/ljHpNNj2+P8HN76ioZ8E/WyUK9TBpyD/pLsYVSw7OP2Cl3610tNE/GxOdw/dH1T9SjhUgyJ7VP/01WcYj8tk/jPsEdUUf2j/JhgObUJ7cP+zhlvuetN8/JJlMHR0+4D/tebg66ZThP5CDKOfa4+E/IPhTE35q5D/9wOail7jkP++QDuAF6uU/RZaBr5zy5T92rt6Sb0HmPyJCYyFKnOY/u9M+JuTR6T/IdBoFvCnqPw1QgXohNe4/Jv1IYSKk7j/kI5sc2HbxP+/dZU8JTfI/arg15W6C8j/UZWMT37ryP6FUDK6hyPI/uPXmcP848z97FtNds0HzPz782b4TE/Y/Zu6sQ4Gj9z+Wa/O5zz74P5Q6b/CNtfg/jX8lztua/D/vWUjsNcX8PxigdRPA+fw/UyZq8Bsc/j9RccW+3Hz/P4eG6PHgTABA0IxKpjCOA0A=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[100]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;xBN2X4d65j8c/eR6QNzxP0iGPL+LQfI/hsq2h1BV8j+oVhFQmrTyP3ghzJjvnfM/zHPyElLq8z9kFxg5V7P1P3R6M0oj4/U/klEkfSpt9j9ONFpooOf2P7Lsn4USQvc/POGXIMWF9z9g7w1/mpv3P8I/+/2YE/g/Po+mSXI8+T9MSmR+ghb6P3h2A1p1XPo/cMgDvuJn+j99ZSb3Mbr6P7SammOjxfo/i2vs5Hgg+z+8qJ8R0aP7P9criBTUvfs/ug85TUnN+z/JiLFmxfD7P7LD/86aOPw/6pC5y2A7/D+YFiu1I2H8PxAVPaYpePw/Qyb+GDKs/D9oiJ6UTcn8Py6SzOGc0vw/pXLsyGXZ/D9MdOZS9u78PyJm5KLF7/w//jbOXBYW/T8vEtAOqUX9P5Gy7atSWP0/FSORm31k/T9GSrGVsQP+P61OoOb+BP4/m+RMJhQh/j9U2VODJEv+Pyy8I/0uWP4/d5eLXPSN/j8urIOR9vX+P1vezvsnJv8/CPtHTadf/z9aQ19uBmT/P87lwtutc/8/A5i+HK4WAECb8syoVBsAQA0LoY7FSABAqBPTWSJQAECXkPpEW1MAQA2/95W6XABA5iG5GRdkAEA06jXZ9HgAQG5+R0U9iwBAK1Goh0nDAEB3Ma5YcvAAQFb63UpHGwFAMtE5fH9UAUDlWAGC7FkBQGCTZTwinwFAuU9QV/ShAUBtOLAJ5ckBQB9uue9J+wFAJJOpo8MHAkA+D1cnnTICQHIQ5Vx7PAJABH9qwk+NAkAg2Fz0EpcCQB7SAbxAvQJAyTLwlVO+AkDP1VvyLcgCQERoLESJ0wJAd9rHhDw6A0CZTqOAN0UDQAIqUC+kxgNApR8pTITUA0D5yCYHtl0EQHx32VNCkwRAGm5NuZugBEB12djEt64EQCgVg2sosgRAbr053D/OBECfxXTXbNAEQBB/tu/EhAVAmjvrUODoBUDm2nzusw8GQKXOG3xjLQZA41+J87YmB0B8FhJ7TTEHQAZo3QRwPgdAlYka/AaHB0BUXLEvN98HQERD9HhwJghAaEYlUxjHCUA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[100]}},&quot;selected&quot;:{&quot;id&quot;:&quot;60961&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;60960&quot;}},&quot;id&quot;:&quot;60947&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;60957&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;60920&quot;}},&quot;id&quot;:&quot;60919&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;60942&quot;}},&quot;id&quot;:&quot;60946&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;60947&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;60948&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;60949&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;60951&quot;}},&quot;id&quot;:&quot;60950&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60960&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60948&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;60931&quot;}},&quot;id&quot;:&quot;60925&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;60932&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;60955&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;60916&quot;}},&quot;id&quot;:&quot;60915&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;red&quot;,&quot;line_alpha&quot;:0,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60943&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60957&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;60915&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;60918&quot;},{&quot;id&quot;:&quot;60922&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;60919&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;60945&quot;},{&quot;id&quot;:&quot;60950&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;60952&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;60933&quot;},&quot;toolbar_location&quot;:&quot;above&quot;,&quot;x_range&quot;:{&quot;id&quot;:&quot;60907&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;60911&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;60909&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;60913&quot;}},&quot;id&quot;:&quot;60906&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60916&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;60947&quot;}},&quot;id&quot;:&quot;60951&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60949&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;60952&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60909&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[400]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;nYu6aTvIYL91HLtrdhWBP+21BY4eFZM/piVBmyKGnT+y7seu4+6jP5PueGoGDqk/d5KzgHkgrj8v7bt4HpOxPyTjYl6oD7Q/GqtOcdqFtj8RRX+xtPW4Pwqx9B43X7s/BO+uuWHCvT+A/9ZAmg/AP37weLvXOsE/fkq9TOliwj99DaT0zofDP305LbOIqcQ/fs5YiBbIxT9/zCZ0eOPGP4Izl3au+8c/hQOqj7gQyT+IPF+/liLKP43etgVJMcs/kumwYs88zD+XXU3WKUXNP5w6jGBYSs4/D4NtAVtMzz9Fle+CLwXQP2j0K1sGXdA/M57LMxa40D8huOH5gCDRP8ntjH5OotE/mIj+Xn4L0j9VJ/NLDo/SPwfc2orO7tI/bKCn8Fko0z9pyUEkzGzTP8S2HCPK09M/ORFOMihZ1D8FalRX3/jUP+U6F1gNr9U/EObmuvR31j8y/qeVRT3XP8/HYGNW/dc/qxwej6e42D8M6WkjuG/ZP2yGr8Lk8tk/DEPZogJ32j8+plT+NdTaP5cp4L3frts/AWNYd01t3D9C4bLVzBvdP0htA28Sw90/sKrBWpVh3j/CV60vTwrfP4iepN09tN8/E0ksEO0q4D9FGoTevpngP+CnunMNReE/xCHwdHip4T/sII/yqAziPxx9CydfV+I/cn0apBm04j+JdAW0SwbjP1PbKvvLTOM/zDSExq6O4z8BG4BO67njP5Z1xIdz8eM/v/7N/7c+5D+oU16QRZLkP1A35+v/+uQ/Vvr74XpR5T8n1sPZyajlP8NNP77GEOY/AMbY6wqG5j+i9wqWQQXnP8x9714Iauc/84HuS0mr5z8THs/odxroP7xp4i6Uaug/eE+D35G46D+rakEo0g/pPxTUphn/c+k/es7S7DrH6T/QtGYBARPqP039wyFlbeo/EEG/0hDB6j+sThIqFiDrP4uHF6GWius/TmK0+H0L7D+oUaJ1G6vsP3sirfVUUO0/aCGRDJDd7T/fHoMAg3HuP5nlgb05DO8/9obs7YGT7z/Z3+JnRgfwP3u+msUmOvA/nUUtPzdq8D8HJpdmf5fwP5FqqBr0u/A/NpI1b6Xy8D8K1H81bCfxP0Vhs9HTZPE/00kv7amH8T+5pRG3vrHxP1CoVGmh4fE/F11+a9EV8j+XrsNkkUzyPwKArBohgvI/TllDp1u58j9vc2VhMvbyPzCQhx1zJ/M/4FHDq6858z9lnqZXgW7zP6OZX6JGpvM/lri6lx3o8z/1LYvFzCf0P4L9GgAsY/Q/H2BQ9wyU9D8Dp54s6sP0P0UiZ4uNE/U/5fkZK9FR9T+igHsh5Yb1P1SixItkwPU/zefmlA/69T8+Q1NdBz/2P+x6zPJXh/Y/kdZyiXLJ9j+2fPZTwwP3Pw4pBU8HNPc//lgzL59s9z98p1AFyrb3P8QDjKkn6Pc/xTOIsvse+D8U71E0AUT4P8wJH6ugYvg/Agn4J76C+D8ZBu+KIbD4P2ZDcMf35/g/WOp/KXcc+T/WfrtZTlL5P072Kvkqjfk/aciKOpC++T+JPW0jse75P0s0MCIqHfo/5nXQIlNh+j+6dHx9U676P5B0OUcG9Po/kMioNZcs+z+EUqUS7Vz7P4oa/KiLgfs/SmSb/YOl+z+ZAOReK877Py5GC2cB/fs/8ZPCioU3/D+QC0OdFGn8P1TTFkRIm/w/0SVkVFzS/D/yd6xufwb9P0y2BFmrN/0/eH3MA9Zl/T9ZoeWjWJH9PxpCVE/zvf0/INnwYUjs/T8WnlvQ/Bz+PxKH/Ce4UP4/e/LfjeKG/j9RxjBnO7v+P7gX+gUK7f4/sAyBbN0b/z+zPBJlPUf/P76gIMJceP8/qXQkORqp/z8Ith3Kddn/P24yhrq3BABAkkD4nIMcAEBvBWWMHjQAQAiBzIiISwBAWrMuksFiAEBmnIuoyXkAQC0848ugkABArZI1/EanAEDon4I5vL0AQN1jyoMA1ABAjN4M2xPqAED1D0o/9v8AQBj4gbCnFQFA9pa0LigrAUCO7OG5d0ABQOD4CVKWVQFA67ss94NqAUCyNUqpQH8BQDJmYmjMkwFAbE11NCeoAUBg64INUbwBQA9Ai/NJ0AFAeEuO5hHkAUCaDYzmqPcBQBbSHDJYig9AIw0EQLWDD0ByzW5JjnwPQAQTXU7jdA9A2d3OTrRsD0DxLcRKAWQPQEwDPULKWg9A6V05NQ9RD0DKPbkj0EYPQO2ivA0NPA9AU41D88UwD0D8/E3U+iQPQOjx27CrGA9AFmztiNgLD0CHa4Jcgf4OQDzwmium8A5AMvo29kbiDkBsiVa8Y9MOQOmd+X38ww5AqTcgOxG0DkCrVsrzoaMOQPD696eukg5AeCSpVzeBDkBD090CPG8OQFEHlqm8XA5AosDRS7lJDkA1/5DpMTYOQF/F04ImIg5Amb3JruUJDkDdQ1Ns8fINQI3BR7sB3Q1AhX3oodLHDUB/5ILxGq0NQA/3ppCGjg1AABMP9hlyDUDXk9CmjVcNQNiehCCePg1AByNI2QsnDUCB1Ddzbw8NQFoxQjgJ9gxAC7HYgDPbDEDZ1GstR78MQN7q8BBmpgxAMDH0xDOQDEDU6UyoQ3kMQJp2RzTRYAxAvVFdXX9IDEBwhwHw7S8MQMaAiQHdEgxA/Xh0PJn0C0DRe1h8ntMLQGMXf4V0sAtAqIj7jLaNC0B2WU0tmXQLQHqZO9HrVgtAtd4jYOE8C0CXjIe40SULQBzPUUiZEwtAHZ6ZB3YBC0DSvvJqcO0KQCbcBUQR1QpAUb5qlea5CkCeXYFOeZwKQEWGLpNrfgpAF1dqqaRgCkAHdoO1I0QKQOKGkOTMMgpAYz+JBhYiCkAu/0NxexAKQO5JWVQD/AlATb2BCQ7gCUBqpcj6YcEJQHeAKeyUoAlAUGEAHTF/CUBKoxCgSGUJQCo/pVfCSAlAhkowuxYpCUDSPrfvCgQJQJJOgByl7whAECVpAqfeCEDPLhNxBsEIQBZ2Bv3GpAhAEYRybB+ICEDokV3DvnIIQNJgyo6RWAhAocx2rSVFCECAegExXi4IQJWtwxrmFwhAfJqtIGH/B0By4JzstewHQHqoqt5o2AdAageKwf7CB0BCq/vi96oHQOPw6iG0kQdAlaRJIdN5B0CF2DAFTmQHQABHomUcTwdANPZs9Ps6B0BlFSoukiIHQNfP64iiDQdA8Dj8GfP5BkBuD+HkQuYGQKNfLFWB0gZA4oVwYI3ABkARZD13yaoGQLp4VkRUkgZAW4PNqOB5BkB99owMd2AGQDXnASXGOwZASN4wRksjBkB10JyuywkGQArHVsM17gVAsU8uYmTJBUDdWzFLL6EFQMGidkOLdQVA6CTa1iZMBUDegr9B2SUFQABaHzFhAwVAjBCD1JrmBEB1e2HQTM4EQKTYAFiBtARALvt+g8qWBEATZ1CTjHgEQA6z3qmRVwRAAsjysVQ0BECz/KrYvxIEQDsbVkJO8wNAXgypmH3WA0CVJ5TrY7sDQKuv5nG8mANAK9ph2L17A0A9hV8FlmMDQN3utEJYTwNA29evZ1YvA0D/M0ajugsDQC5AXwsw8AJAC8qOt7zeAkAWnc6It9cCQGACoAF1wgJAfq/z3m2vAkBmrr+qspMCQNEVXvFEeAJAXTIUTQxhAkA5xmbtVFICQEyYILDJPgJAYrPHFH0sAkBB3zBiixoCQAoE814iCgJAffM71SL7AUCTrGGf9+wBQLYiXAex3gFAQfhk5anSAUCzrTNQZsMBQDmFft4dtQFA/gsLuIKiAUBhXKpEMo4BQPcwDZPodwFAPLJJDWBfAUBBSQuPjUQBQFi5aHagKQFAZExIMcQOAUDTwh6pJvQAQJZT70L42QBAIqxL32vAAECFo0kizaYAQFbtWByUiwBAgQDS3xNvAEBS3DJIe1UAQBmetb4rPQBAqoC9GKooAEA4mkXg+hUAQMsCmwZwAwBAp5z2PH7e/z+aIAbEO6z/P6u5PuQref8/Z2WgnU5F/z/NIyvwoxD/P9303tsr2/4/mNi7YOak/j/9zsF+023+Pw3Y8DXzNf4/yPNIhkX9/T8tIspvysP9PzxjdPKBif0/9rZHDmxO/T9aHUTDiBL9P2qWaRHY1fw/IyK4+FmY/D+HwC95Dlr8P5Zx0JL1Gvw/TjWaRQ/b+z+yC42RW5r7P8D0qHbaWPs/ePDt9IsW+z/b/lsMcNP6P+kf87yGj/o/oVOzBtBK+j8DmpzpSwX6PxDzrmX6vvk/yF7qett3+T8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[400]}},&quot;selected&quot;:{&quot;id&quot;:&quot;60959&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;60958&quot;}},&quot;id&quot;:&quot;60942&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;60915&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;60918&quot;,&quot;type&quot;:&quot;Grid&quot;}],&quot;root_ids&quot;:[&quot;60906&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.0&quot;}}';
                  var render_items = [{"docid":"f9bd146c-9757-4ef8-b869-ff58dde4fd6c","root_ids":["60906"],"roots":{"60906":"52a58099-0738-413e-b1c1-6a033247dc56"}}];
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