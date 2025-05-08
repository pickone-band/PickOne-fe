function Footer() {
  return (
    <footer className="w-full bg-surface-gray text-text-white-default py-16 px-[90px]">
      <div className="max-w-screen-xl mx-auto px-4">
        <nav className="flex flex-wrap gap-8 text-text-white-default text-sm mb-6">
          <a href="#">회사소개</a>
          <a href="#">서비스 소개</a>
          <a href="#">이용약관</a>
          <a href="#">개인정보 처리방침</a>
          <a href="#">고객센터</a>
        </nav>
        <div className="text-xs text-text-white-weak leading-8 mb-6">
          피크원  대표이사 홍길동 고객센터 1234-5678 (평일 09:00~18:00 /
          점심시간 12:00~13:00 / 주말 및 공휴일 휴무)
          <br />
          사업자등록번호 000-00-00000 호스팅서비스제공자 : 마이크로소프트
          유한회사, 구글클라우드코리아 유한회사, 아마존웹서비시즈코리아 유한회사
          <br />
          통신판매업 신고번호 : 제 2000-서울@@@-@@@호 통신판매업 정보 공개
          : http://www.pickone.go.kr
          <br />
          서울특별시 @@구 @@@@로 @@ 포스트타워 @@층 전자우편주소
          : pickone000@pickone.com
        </div>
        <div className="text-xs text-text-white-default font-regular">
          Copyright ⓒ피크원(주) All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
