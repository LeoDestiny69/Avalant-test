const id = Number(req.query.id) || '';
const post = post.find(p => p.id === id);

export default function handler(req:any, res:any) {
    if(req.method === 'GET') {
        if(!post) {
            return res.status(404).json();
        }
        if(!user) {
            return res.status(401).json();
        }
        if(post.author_id !== user[0].id) {
            return res.status(403).json();
        }
        if (req.method === 'PUT') {
            // Update post
        }
        if (req.method === 'DELETE') {
            // Delete post
        }
    }
    return res.status(405).end();
}