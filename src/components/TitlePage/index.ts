import { useRef, useEffect } from "react";

export const TitlePage = (title: string, check = false) => {
    const defaultTitle = useRef(document.title);

    useEffect(() => {
        document.title = title;
    }, [title]);

    useEffect(() => () => {
        if (!check) {
            document.title = defaultTitle.current;
        }
    }, []);
}