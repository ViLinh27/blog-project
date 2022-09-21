//accepts single peorpty called posts
//if posts if posts not passed in as prop we specify default val of empty array
//because we invoke posts.maps
//dynamic created content
//posts is list of objects containing title author date
    //all that data is passed to Post compment
    //...p is spreading every post peroperty on the post compnent
    //Post ttiel = {p.title} author = {p.author} content={p.content} key = {post +i}/> is not practial compared to spreading
    //could have many fields
    //...p every peproty of p is spread to Post compnent so shorthand
    //when dynamically creawting content: need to pass key attr
    //key 'post' is bad becuase keys should be unique to each compnent in list 
        //ipmroant in dynamic data

    //uuid would be better kkey

import Post from './Post'

export default function PostList ({posts =[]}){
    return(
        <div>
            {posts.map((p,i) =><Post {...p} key={'post-' +i} />)}
        </div>
    )
}