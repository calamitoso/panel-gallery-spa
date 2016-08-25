var PanelGallerySPA = (function(){

    console.log('yo!');

    let defaults = {
        a: 1
    };
 
    var init = function(){
        console.log(defaults.a);
    };

    //expose API
    return {
        init: init
    };

   
})();




module.exports = PanelGallerySPA;
