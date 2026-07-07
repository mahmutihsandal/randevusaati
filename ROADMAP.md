# Randevu Saati Website Roadmap

## Hedef

Web sitesini basit ürün tanıtım sayfasından, salon sahiplerine güven veren premium bir satış ve onboarding deneyimine taşımak.

## İçerik Mimarisi

1. Hero
   - Net değer önerisi: müşteri randevuyu kendisi alır, salon akışı kontrol altında kalır.
   - Müşteri uygulamasından güncel ekran görüntüleri kullanılacak.
   - Ana CTA: demo talebi.

2. Müşteri Akışı
   - Salon vitrini
   - Hizmet/personel seçimi
   - Tarih/saat seçimi
   - Randevu onayı
   - Bu bölümde gerçek ekran görüntüsü kullanmak doğru. Kullanıcı ürünü burada görmeli.

3. Admin/İşletme Paneli
   - Güncel admin ekranları gelene kadar gerçek screenshot kullanılmayacak.
   - Yerine premium mock/placeholder paneller kullanılacak.
   - Gösterilecek admin kabiliyetleri:
     - Ana sayfada günlük randevular ve önündeki 1 haftalık yakın tarih randevuları
     - Takvim sayfasında tüm haftayı aynı anda görme
     - Takvimde izin günü, kapalı gün ve saat kapatma yönetimi
     - Muhasebe sayfasında haftalık/aylık randevu sayısı ve kazanç
     - Muhasebe sayfasında personel bazlı kazançlar
     - Profil/ayarlar sayfasında dükkan ayarları, personel ekleme, hizmet ekleme

4. Kurulum ve Geçiş
   - "Siz de Randevu Saati'ne geçin" mesajıyla onboarding akışı anlatılacak.
   - Video gelene kadar boş placeholder gösterilmeyecek; polished onboarding/kurulum kartı kullanılacak.
   - Video gelince bu alan gerçek poster/video dosyasıyla değiştirilecek.

5. Paketler ve Karar Destek
   - Paketler sade kalacak.
   - Karşılaştırma tablosu satın alma kararına yardım edecek.
   - Fiyatlar daha sonra stratejiye göre değiştirilebilir.

## Görsel Varlık Politikası

- Müşteri tarafı: Güncel ekran görüntüleri kullanılabilir ve kullanılmalı.
- Admin tarafı: Güncel screenshot gelene kadar placeholder/mock UI kullanılacak.
- Kurulum videosu: Video gelene kadar canlı sitede boş placeholder değil, polished onboarding kartı kullanılacak.
- Codex yeni screenshot alarak inceleme yapmayacak. Kullanıcı açıkça izin vermedikçe sadece kullanıcının paylaştığı görseller incelenecek.
- Kullanıcı tarafı için kullanılacak ek pazarlama/poster görsel kaynağı:
  - `/Users/mahmutdal/Desktop/app archive/RS reklam/randevum app icınları/market posters`
- Bu klasördeki dosya adları akışı tarif ediyor; gerekli olanlar siteye seçilerek taşınacak/kopyalanacak. İlk adaylar:
  - `apple-iphone-15-pro-white-titanium-mockup/1home-portrait.png`
  - `apple-iphone-15-pro-white-titanium-mockup/2staff-portrait.png`
  - `apple-iphone-15-pro-white-titanium-mockup/services.png`
  - `apple-iphone-15-pro-white-titanium-mockup/4calendar-portrait.png`
  - `apple-iphone-15-pro-white-titanium-mockup/5approved-portrait.png`
  - `apple-iphone-15-pro-white-titanium-mockup/6past-portrait.png`
  - `apple-iphone-15-pro-white-titanium-mockup/7profile-portrait.png`
  - `apple-iphone-15-pro-white-titanium-mockup/shopsearchh-portrait.png`
  - `apple-iphone-15-pro-white-titanium-mockup/splash-portrait copy.png`
- Seçilen ve optimize edilen kopyalar repo içinde `assets/marketing/` altında tutulacak.
- Yeni ekran görüntüleri geldiğinde hedef klasör:
  - `assets/screens/user-current/`
  - `assets/screens/admin-current/`
  - `assets/video/`

## 2026-07-07 Görsel Geri Bildirim Notu

Kullanıcının paylaştığı canlı site görsellerine göre mevcut tasarım modern SaaS/ürün landing hissinden uzak; portfolio/screenshot galerisi gibi algılanıyor. Temel problemler:

- Ekran görüntüleri fazla büyük, kırpılmış ve sayfanın ana tasarım öğesi gibi davranıyor.
- Tipografi aşırı iri ve içerik, ürünü satmak yerine tasarım kusurunu büyütüyor.
- Müşteri akışı bölümü ekran kartı vitrini gibi; ürün değer önerisi, dönüşüm ve güven hissi zayıf.
- Hero bölümü daha iyi olsa da hâlâ modern, rafine, premium bir landing standardına ulaşmıyor.
- Bundan sonraki çalışma screenshot sergilemek yerine tasarım sistemi, net CTA, premium hero, kısa değer blokları, daha kontrollü ürün mockup'ları ve dönüşüm akışı üzerine kurulacak.

## Yeni Tasarım Yönü

- Sayfa modern SaaS/ürün landing gibi tasarlanacak; portfolio, ekran galerisi veya app-store vitrin mantığı kullanılmayacak.
- Ekran görüntüleri ana içerik olmayacak. Sadece hero içinde ve küçük proof alanlarında kontrollü kullanılacak.
- Müşteri akışı bölümü büyük telefon kartları yerine kompakt adım kartları ve küçük ürün önizlemeleriyle anlatılacak.
- Admin tarafı tek tek kart yığını yerine güçlü bir dashboard mock kompozisyonuyla gösterilecek.
- Tipografi daha kontrollü olacak: büyük başlık sadece hero'da, alt bölümlerde daha rafine ölçüler.
- İlk ekranın amacı: ne işe yarıyor, kime yarıyor, nasıl demo alınır sorularını hızlı cevaplamak.
- Bölüm sırası: hero, güven/değer şeridi, kısa randevu akışı, işletme paneli, kurulum/geçiş, paketler, SSS.

## 2026-07-07 İkinci Görsel Geri Bildirim Notu

Kullanıcının paylaştığı iki yeni canlı site görseline göre hâlâ düzeltilmesi gereken noktalar:

- Hero başlığı hâlâ çok büyük ve çok satıra bölünüyor; ilk ekranın dengesi metin lehine fazla ağır.
- Hero görsel kompozisyonunda dashboard ve telefon alanı daha rafine olmalı; telefon chart/dashboard üstünü kapatan rastgele overlay gibi durmamalı.
- Müşteri akışı bölümünde başlık yine fazla büyük ve ürün değerinden çok iç tasarım kararını anlatıyor. Kullanıcıya "screenshot galeri değil" gibi iç ekip dili gösterilmemeli.
- Akış kartları çok dar; metinler kelime kelime alt satıra düşüyor ve profesyonel görünmüyor.
- Mini ekran görselleri çok küçük ve bölümün altında kopuk duruyor; kullanıcıya değer katmıyor.
- Müşteri tarafı için market poster klasöründeki daha temiz mockup/poster görselleri seçilmeli; ham ekran görüntüsü kullanımına göre daha kontrollü sonuç verebilir.
- Bir sonraki UI turunda öncelik: hero başlığını kısaltmak, akış kartlarını yatay/kompakt düzene almak, müşteri görsellerini poster varlıklarıyla değiştirmek, iç ekip dilini satış diline çevirmek.

## 2026-07-08 Görsel Geri Bildirim Notu

Kullanıcının paylaştığı üç yeni canlı site görseline göre site hâlâ yeterince profesyonel görünmüyor. Bir sonraki geliştirme turunda aşağıdaki değişiklikler yapılacak:

### Hero

- Hero başlığı hâlâ çok büyük ve fazla satıra bölünüyor. Başlık daha kısa, daha rafine ve daha az yer kaplayacak.
- Sol metin alanı ile sağ ürün görseli arasında daha premium bir kompozisyon kurulacak; şu an iki taraf ayrı parçalar gibi duruyor.
- Telefon görseli ve dashboard kartı aynı hikayeyi anlatacak şekilde yeniden yerleşecek. Telefon, dashboard’un üstüne rastgele bindirilmiş gibi durmayacak.
- Dashboard içindeki liste/chart çakışması düzeltilecek. Şu an chart kartı randevu listesinin metinlerini kapatıyor ve kırık UI hissi veriyor.
- Hero metrikleri ilk ekranda kopuk ve aşağıda kalıyor. Bunlar daha kompakt bir güven/kanıt şeridine dönüştürülecek veya hero içinde daha kontrollü kullanılacak.

### Müşteri Akışı

- Akış bölümü hâlâ yeterince güçlü satış dili taşımıyor. Daha net fayda odaklı metinlerle yeniden yazılacak.
- Akış kartları ve poster önizlemeleri daha bütünleşik olacak; küçük görseller altta kopuk bir ek gibi durmayacak.
- Bu bölümde amaç “ekran göstermek” değil, müşterinin randevuyu işletmeyi aramadan tamamladığını profesyonel şekilde anlatmak olacak.

### Kurulum

- Video placeholder çok boş ve tamamlanmamış ürün hissi veriyor. Gerçek video gelene kadar bu alan daha polished bir onboarding/kurulum kartına dönüştürülecek.
- “Kurulum videosu alanı” gibi placeholder metni canlı sitede görünmemeli.
- Kurulum adımları daha kısa, daha premium ve daha az kutu hissiyle sunulacak.
- Başlık ve sağ kolon boyutu küçültülecek; bölüm daha dengeli hale getirilecek.

### Paketler

- Paket bölümü diğer bölümlere göre daha düzenli ama hâlâ ağır ve büyük görünüyor.
- Başlık, toggle ve kartlar daha kompakt hale getirilecek.
- Kart yükseklikleri ve boşluklar azaltılacak.
- “En çok tercih edilen” rozeti ve fiyat alanı daha rafine konumlandırılacak.

### Paket Tasarım Referansı

- Kullanıcının verdiği `fiyat.png` yalnızca eksen/referans olarak alınacak; birebir kopyalanmayacak.
- Paketler daha anlaşılır, renk kodlu ve karar vermeyi kolaylaştıran bir düzene geçecek.
- Her paket ayrı accent rengi taşıyacak: başlangıç/kırmızı, gelişmiş/yeşil, profesyonel/mavi, plus/turuncu.
- Fiyatlar daha büyük ve temiz okunacak; `/ay` etiketi daha net konumlanacak.
- Paket başlıkları teknik değil işletme seviyesine göre anlaşılır olacak.
- Özellik listeleri daha sade ve karşılaştırılabilir yazılacak.
- “En popüler” rozeti renkli ama premium görünecek.
- Renkli accent sistemi sadece fiyat/paket bölümünde kullanılacak; hero, akış, kurulum ve genel kart sistemi sade marka tonunda kalacak.

### Genel Tasarım Kalitesi

- Büyük başlıklar yalnızca gerektiği yerde kullanılacak; alt bölümlerde daha sakin tipografi.
- Kutu/kart yoğunluğu azaltılacak. Daha az ama daha güçlü kompozisyonlar tercih edilecek.
- Canlı sitede iç geliştirme dili, placeholder dili veya “şimdilik” hissi veren hiçbir metin kalmayacak.
- Tasarım yönü modern SaaS landing olarak korunacak: net değer önerisi, kontrollü görsel kompozisyon, premium dashboard hissi, güçlü CTA.

## 2026-07-08 Açılış ve Akış Kararı

- Açılış/hero alanı satış sayfasının en güçlü bölümü olacak; ayrı ayrı duran telefon, panel ve metrik kutuları yerine tek ürün sahnesi gibi kurgulanacak.
- Sayfa açılışında CSS tabanlı kontrollü giriş animasyonları kullanılabilir: header, başlık, metin, CTA, ürün sahnesi ve grafik barları sırayla görünür.
- Ağır doğrulama veya yeni ekran görüntüsü alınmayacak; kullanıcı açık izin vermedikçe tasarım değerlendirmesi yalnızca paylaşılan görseller üzerinden yapılacak.
- Müşteri akışı bölümü kesinlikle dar sağ kolon/kırık kart yapısına dönmeyecek. Üç adım kartı okunabilir genişlikte kalacak; poster görselleri küçük kanıt şeridi olarak kullanılacak.
- Kırmızı, mavi, turuncu gibi güçlü accent renkleri genel hero/akış/kurulum kartlarına yayılmayacak. Renk kodlu sistem yalnızca paket/fiyatlandırma bölümünde kullanılacak.
- Kurulum alanında boş video/placeholder hissi verilmeyecek. Gerçek video gelene kadar canlı sitede bitmiş görünen onboarding kartı kullanılacak.

## 2026-07-08 WhatsApp Overlay Kararı

- Sağ alt köşede sabit WhatsApp iletişim overlay'i kullanılacak.
- Overlay masaüstünde ikon + kısa etiket, mobilde yalnız ikon olarak görünecek.
- Telefon numarası gelene kadar link pasif kalacak; numara geldiğinde yalnızca `index.html` içindeki `data-phone` alanına ülke kodlu numara yazılacak.
- Varsayılan mesaj hazır tutulacak: demo talebi almak için WhatsApp sohbeti başlatılacak.
- WhatsApp yeşili bu özel iletişim aksiyonu için istisna kabul edilecek; genel sayfa renk sistemi yine sakin SaaS tonlarında kalacak.

## Bu Aşamada Bilerek Ertelenenler

Geliştirmeyi yavaşlatmamak için aşağıdakiler en sona bırakılacak:

- Browser/Playwright ekran görüntüsü doğrulaması
- Pixel-perfect mobil/desktop QA
- Lighthouse, performans ve erişilebilirlik denetimi
- Görsel asset optimizasyonu
- Deploy ve GitHub Pages kontrolü
- Uzun build/test komutları

## Sıradaki Uygulama Adımları

1. Sayfayı premium ürün anlatımı ve daha güçlü UI bölümleriyle yeniden düzenle.
2. Admin kabiliyetlerini mock dashboard bloklarıyla anlat.
3. Kurulum/video ve geçiş CTA bölümlerini ekle.
4. Güncel admin screenshotları gelince mock blokları gerçek görsellerle değiştir.
5. En sonda hızlı teknik doğrulama ve görsel QA yap.
