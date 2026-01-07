type Post = {
    id: number;
    title:string;
    content:string;
    author_id:number;
}

const posts: Post[] = [
    { id: 1, title: "Hello", content: "World.", author_id: 1 },
]

const user = [
    {id:1}
]

export default function handler(req:any, res:any) {
    if(req.method === 'GET') {
        res.status(200).json(posts);
    }

    if(req.method === 'POST') {
        const { title, content } = req.body;
        if(!title || !content) {
            return res.status(400).json();
        }
        if(!user) {
            return res.status(401).json();
        }

        const newPost: Post = {
            id: posts.length + 1,
            title,
            content,
            author_id: user[0].id
        };
        posts.push(newPost);
        res.status(201).json(newPost);
    
    }
    return res.status(405).end();

}