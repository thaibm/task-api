import bcrypt from 'bcrypt';

interface User {
    id: string;
    username: string;
    password: string;
}

const users: User[] = [];

export class AuthService {
    async register(username: string, password: string) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = { id: crypto.randomUUID(), username, password: hashedPassword };
        users.push(user);
        return {
            id: user.id,
            username: user.username,
        };
    }

    async login(username: string, password: string) {
        const user = users.find(user => user.username === username);
        if (!user) {
            throw new Error('User not found');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }
        return user;
    }
}