import fs from 'fs'
import path from 'path'

const blogDirectory = path.join(process.cwd(), 'blogs')

function getAllBlogs() {
    const fullPath = path.join(blogDirectory, 'blogs.json');
    const fileContent = fs.readFileSync(fullPath);
    const blogs = JSON.parse(fileContent);
    return blogs;
}

export function getBlogsSortedByDate() {
    const blogs = getAllBlogs();

    return blogs
        .sort((a, b) => {
        if (a.date > b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export function getAllBlogIds() {
    const blogs = getAllBlogs();
    return  blogs.map(blog => {
        return {
                    params: {
                        id: blog.id
                     }
               }
    });

}

export async function getBlogPost(id) {
    const blogs = getAllBlogs();
    return  blogs.find(blog => blog.id === id);
}