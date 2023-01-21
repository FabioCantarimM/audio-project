
export interface User{
    name: string;
    email: string;
    password?: string;
};

export interface Course{
    name: string;
    creator: User;
    category: string;
    audio: Record<string, AudioClip>;
};

export interface AudioClip{
    name: string;
    path: string;
    uuid: string;
    order: number[];
};