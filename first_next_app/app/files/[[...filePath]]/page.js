export default async function FIle({params}){
    const {filePath} = await params;
    return(
        <h1>File <i>{filePath?.join("/")}</i></h1>
    );
}