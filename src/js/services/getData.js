const getData = async url => {
  const res = await fetch(`/${url}`);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status ${res.text}`);
  }
  return await res.json();
};

export default getData;
