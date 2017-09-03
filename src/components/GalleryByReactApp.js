'use strict';

var React = require('react/addons');

// CSS
require('normalize.css');
require('../styles/main.scss');

//获取图片相关的数据
var imageDatas = require('../data/imageDatas.json');
//利用自执行函数，将图片名信息转成图片的URL路径信息。
function getImageURL(imageDataArr){
    for(var i = 0, j = imageDatasArr.length; i < j; i++){
        var singleImageData = mageDatasArr[i];
        singleImageData.imageURL = require('../images/' + singleImageData.fileName);
        imageDatasArr[i] = singleImageData;
    }
    return imageDataArr;
}

imageDatas = getImageURL(imageDatas);

var GalleryByReactApp = React.createClass({
  render: function() {
    return (
        <section className="stage">
            <section className="img-sec">
            </section>
            <nav className="controller-nav">
            </nav>
        </section>
    );
  }
});
React.render(<GalleryByReactApp />, document.getElementById('content')); // jshint ignore:line

module.exports = GalleryByReactApp;
