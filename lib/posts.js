import fs from 'fs'
import path from 'path'

const blogDirectory = path.join(process.cwd(), 'blogs')

function getBlogsContents() {
    const fullPath = path.join(blogDirectory, 'blogs.json');
    const fileContent = fs.readFileSync(fullPath);
    const blogs = JSON.parse(fileContent);
    return blogs;
}

export function getSortedBlogsData() {
    const blogs = getBlogsContents();

    return blogs
        .sort((a, b) => {
        if (a.date > b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export function getAllBlogsIds() {
    const blogs = getBlogsContents();
    return  blogs.map(blog => {
        return {
                    params: {
                        id: blog.id
                     }
               }
    });

}

export async function getBlogPosts(id) {
    const blogs = getBlogsContents();
    return  blogs.find(blog => blog.id === id);
}