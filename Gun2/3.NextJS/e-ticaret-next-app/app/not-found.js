import Link from "next/link";

const myStyle = {
    with: "100%",
    height: "98vh",
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column"

}
export default function NotFound() {
    return (
        <>
            <div style={myStyle}>
                <h1>Aradığınız Sayfa Bulunamadı!</h1>
                <p>Geri Dönmek için 
                    <Link href="/"> tıklayınız</Link>
                </p>
            </div>

        </>
    )
}