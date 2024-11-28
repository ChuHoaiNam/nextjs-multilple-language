import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Page() {
      const t = useTranslations('HomePage');
    return <div>{t("title")}
    
    <Link href="/" locale="vi">Switch to VI</Link>
    <Link href="/" locale="en">Switch to EN</Link>
    </div>
}