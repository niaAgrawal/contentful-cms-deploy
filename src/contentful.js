const client = require('contentful').createClient({
    space:'2ubxve0wmw2e',
    accessToken:'z4pul0Uh35pfNd9ph_FyG52HqiD61qnva3jWhvAo9kE'
});

const getPosts = () =>  client.getEntries().then(ent => ent.items);

const getSinglePost = slug =>
  client
    .getEntries({
      'fields.slug': slug,
      content_type: 'blogCms'
    })
    .then(response => response.items)

const getPosts2 = (slug) =>  client.getEntries().then(ent => ent.items.find(post => {
    if (post.fields.slug === slug) {
        return post.fields
    }
})
);
export  {getPosts, getSinglePost, getPosts2}