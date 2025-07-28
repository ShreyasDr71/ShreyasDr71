const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Shreyas%20D%20R&g=ShreyasDr71&x=voidbender11&l=shreyas-d-r-934640292&i=https%3A%2F%2Fgithub.com%2FShreyasDr71%2FMisc%2Fblob%2Fmain%2Fvoibender-nightpng.png%3Fraw%3Dtrue&p=https%3A%2F%2Fvoid-bender-as-a-dev.vercel.app%2F&z=996db";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
