define('domain/NewsItem', ['moment'], function(moment) {
    var NewsItem = function(data) {
        this.data = data;
    };

    NewsItem.prototype.getTitle = function() {
        return this.data.title;
    };

    NewsItem.prototype.getImageSrc = function() {
        return this.data.imageSrc;
    };

    NewsItem.prototype.getPublishedTimestamp = function() {
        return this.data.publishedTimestamp;
    };

    NewsItem.prototype.getUpdatedTimestamp = function() {
        return this.data.updatedTimestamp;
    };

    return NewsItem;
});