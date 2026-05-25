# Real Time Communications Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIContactCenterAgent`
- `AIVoiceAssistant`
- `AIConversationAnalytics`
- `AIOmnichannelRouter`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/real-time-communications-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:4700`

Seeded users:
- `admin@real-time-comms.local / admin123`
- `manager@real-time-comms.local / manager123`
- `analyst@real-time-comms.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/real-time-communications-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:4700 npm run smoke
```
