var graphqlHTTP = require('express-graphql');
var express = require('express');

var app = express();

var graphql = require('graphql');

var schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: graphql.GraphQLString,
        resolve: function() {
          return 'world';
        }
      }
    }
  })
});


app.use('/graphql', graphqlHTTP({ schema: schema }));

var server = app.listen(4000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
