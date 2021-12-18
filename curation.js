var host = window.location.host
var root = 'https://medium.com'
if (window.location.host === 'hatch.dm') {
  root = 'https://hatch.dm'
} else if (window.location.host === 'standard.dev') {
  root = 'https://standard.dev:8080'
}

var match = /[\/=-]([a-f0-9]{3,12})(\/edit)?$/.exec(window.location.href)

if (match) {
  window.location = root + '/_/curation/post/' + match[1]
} else {
  window.alert('Path does not end with a postId: ' + window.location.href)
}