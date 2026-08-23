# HTA Resource Centre website — AMCHSS, SCTIMST

Static website modelled on the national [HTAIn](https://htain.dhr.gov.in/) portal, localised for the HTAIn Regional Resource Centre at the Achutha Menon Centre for Health Science Studies, Sree Chitra Tirunal Institute for Medical Sciences & Technology, Trivandrum.

## Run locally

From this folder:

```bash
python3 -m http.server 8080
```

Open http://127.0.0.1:8080/

If you see `OSError: [Errno 48] Address already in use`, port 8080 is already serving these files. Open that URL, or start another server:

```bash
python3 -m http.server 8081
```

Open http://127.0.0.1:8081/ (same site). Use any free port if 8081 is also taken, e.g. `python3 -m http.server 8090`.

## Before public launch

- Replace emblem/badge with official SCTIMST and HTAIn artwork (institute approval required for the State Emblem).
- Fill study, publication and event tables from HTAIn Secretariat records.
- Confirm Head of AMCHSS, PI and current project staff.
- Point the contact form to an official institute mailbox if needed.
