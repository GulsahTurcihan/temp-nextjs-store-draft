"use client";
import { Input } from "../ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";

function NavSearch() {
  const searchParams = useSearchParams(); //
  const { replace } = useRouter(); //use client bileşenlerinde useRouter, use server bileşenlerinde searchParams bileşenleri kullanıyoruz
  const [search, setSearch] = useState(
    searchParams.get("search")?.toString() || ""
  ); // arama yaptıktan sonra arama yaptığımızda ortaya çıkan URL sabit kalsın ve bu URL'i kopyaladığımızda aynı değerleri alalım istiyoruz,
  // yani kopyaladığın URL NavSearch'te varsayılan değer olarak ne varsa onunla eşleşecek.
  // Bu nedenle "search" ü boş bir dize olarak ayarlamak yerine URL'deki arama sorgusu parametrelerinin ne olduğunu kontrol edeceğiz.
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value); //eğer kullanıcı bir arama terimi girdiyse, paramlarımıza bir arama sorgusu eklemek istiyoruz ve bunu "set" ile yapıyoruz.
    } else {
      params.delete("search"); // kullanıcı değer "value" sağlamadı ve değeri sildiyse, biz de "delete" ile devam ediyoruz
    }
    replace(`/products?${params.toString()}`); //kullanıcı değer girdiyse kullanıcıyı dinamik olarak sayfaya yönlendirmek için
  }, 500);

  useEffect(() => { //eğer searchParams'ta değer yoksa state değerini boş olarak ayarlamamız gerekir.
    if (!searchParams.get("search")) { //eğer aramada hiç bir şey yoksa...
      setSearch("");
    }
  }, [searchParams.get('search')]);

  return (
    <Input
      type="search"
      placeholder="search product..."
      className="max-w-xs dark:bg-muted"
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
      value={search}
    />
  );
}

export default NavSearch;
