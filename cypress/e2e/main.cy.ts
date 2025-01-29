describe("개선 과제 E2E 테스트", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("시나리오 A: BoardPage (전역 스토어 남용) 테스트", () => {
    cy.contains("시나리오 A").click();
    cy.contains("Board Page").should("exist");

    cy.get('[data-testid="board-search-input"]').type("React{enter}");
    cy.contains("검색어: React").should("exist");

    cy.get('[data-testid="board-open-modal"]').click();
    cy.contains("새 글 작성 모달").should("exist");
    cy.get('[data-testid="board-close-modal"]').click();
    cy.contains("새 글 작성 모달").should("not.exist");
  });

  it("시나리오 B: CommercePage (Props Drilling 심각) 테스트", () => {
    cy.contains("시나리오 B").click();
    cy.contains("Commerce Page").should("exist");

    cy.contains("상품명: Apple").should("exist");

    cy.get('[data-testid="theme-toggle"]').click();
    cy.contains("현재 테마: dark").should("exist");
    cy.reload();

    cy.contains("현재 테마: dark").should("exist");

    cy.get('[data-testid="commerce-checkout-name"]').type("홍길동");
    cy.get('[data-testid="commerce-checkout-submit"]').click();
    cy.contains("결제 성공!").should("exist");
  });

  it("시나리오 C: MailPage (로컬 상태 하나로 뭉침) 테스트", () => {
    cy.contains("시나리오 C").click();
    cy.contains("Mail Page").should("exist");

    cy.get('[data-testid="mail-search-input"]').type("important{enter}");
    cy.contains("검색어: important").should("exist");

    cy.get('[data-testid="mail-compose-btn"]').click();
    cy.contains("메일 작성 모달").should("exist");
    cy.get('[data-testid="mail-compose-close"]').click();
    cy.contains("메일 작성 모달").should("not.exist");
  });
});
