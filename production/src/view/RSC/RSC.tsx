import { characters } from "@/model/characters/characters"
import Image from "next/image"
import Link from "next/link"
import styles from "./style.css"

const RSC = async () => {
    const data = await characters()

    return (
        <main className={styles.container}>
            <section className="">
                <h1>RSCでのハリーポッター図鑑</h1>
            </section>
            <section className={styles.itemImage}>
                {data.map((item) => (
                    <div key={item.id}>
                        <Link href={`/serverSide/${item.id}`}>
                            <Image
                                src={item.image}
                                width={163}
                                height={227}
                                alt={item.name}
                            />
                        </Link>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default RSC